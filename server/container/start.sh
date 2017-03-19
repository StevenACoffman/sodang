#!/bin/bash
# Copy this file to your django application project folder

. /etc/profile

while getopts ":c:n:p:t:" opt; do
  case $opt in 
    c) CMD=$OPTARG ;;
    n) APP_NAME=$OPTARG ;;
    p) NUMBER_OF_PROCESSES=$OPTARG ;;
    t) NUMBER_OF_THREADS=$OPTARG ;;
  esac
done

WSGI_PROCESSES=${WSGI_PROCESSES:=${NUMBER_OF_PROCESSES:=2}}
WSGI_THREADS=${WSGI_THREADS:=${NUMBER_OF_THREADS:=15}}
WSGI_APPLICATION_NAME=${APP_NAME:=${WSGI_APPLICATION_NAME}}

[[ -z $WSGI_APPLICATION_NAME ]] && { echo "Missing application name. Must be set in Dockerfile or passed to start.sh using -n flag"; exit 1; }

# Update newrelic config file with the applcation name
sed -i "s/WSGI_APPLICATION_NAME/${WSGI_APPLICATION_NAME}/g" /opt/newrelic/newrelic.ini

# Update collectd config file
sed -i "s/COLLECTD_ENVIRONMENT/${SGK_ENVIRONMENT}/g" /etc/collectd/collectd.conf
sed -i "s/COLLECTD_APPLICATION_NAME/${SGK_APP}/g" /etc/collectd/collectd.conf
pgrep -f collectd && service collectd restart || service collectd start

# If sidecar is enabled, redirect /watchable request to it
WATCHABLES_TO_SIDECAR_CFG=""
if [[ "$SGK_SIDECAR_ENABLED" == "true" ]]; then
	WATCHABLES_TO_SIDECAR_CFG='RewriteEngine On
	RewriteRule ^/watchable$ http://${SIDECAR_PORT_8888_TCP_ADDR}:8888/watchable [P]
	RewriteRule ^/watchable/(.*)$ http://${SIDECAR_PORT_8888_TCP_ADDR}:8888/watchable/$1 [P]'
fi

# Create the apache vhost configuration
cat <<EOT > /etc/apache2/sites-available/000-default.conf
WSGIRestrictEmbedded On
<VirtualHost *:80>    
    WSGIDaemonProcess django user=${APACHE_RUN_USER} group=${APACHE_RUN_GROUP} processes=${WSGI_PROCESSES} threads=${WSGI_THREADS} python-path=/var/www:/opt/python3/lib/python3.4/site-packages
    WSGIProcessGroup django

	${WATCHABLES_TO_SIDECAR_CFG}

    WSGIScriptAlias / /var/www/${WSGI_APPLICATION_NAME}/wsgi.py 

    Alias /static/ /var/www/${WSGI_APPLICATION_NAME}/static/

    <Directory /var/www/${WSGI_APPLICATION_NAME}/static>
    	Require all granted
    </Directory>

    Alias /media/ /var/www/${WSGI_APPLICATION_NAME}/media/

    <Directory /var/www/${WSGI_APPLICATION_NAME}/media>
    	Require all granted
    </Directory> 
</VirtualHost>
EOT

# Enable sidecar and logbuffer
[[ "$SGK_SIDECAR_ENABLED" == "true" ]] && a2ensite 001-sidecar
[[ "$SGK_LOGBUFFER_ENABLED" == "true" ]] && a2enconf bittybuffer

LOGS_DIR=/var/container-logs/$HOSTNAME
[[ ! -d $LOGS_DIR ]] && mkdir -p $LOGS_DIR

[[ -z $CMD ]] && { /usr/sbin/apache2ctl -D FOREGROUND; } || $CMD
