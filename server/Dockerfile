# Teller Flask Simple-WSGI Flask App Dockerfile

FROM docker-registry.acorn.cirrostratus.org/cypress/pybase

#
# !!! IMPORTANT !!! - DEVELOPER SETTINGS
#
# You must set WSGI_APPLICATION_NAME to the value of the wsgi application name.
#
ENV WSGI_APPLICATION_NAME=teller_flask

#
# INFRASTRUCTURE SETTINGS - DO NOT CHANGE
#
ADD /container /container
EXPOSE 80
ENTRYPOINT ["/container/start.sh"]
# Create the application folder under /var/www and copy the application files to /var/www/<appname>
RUN mkdir -p /var/www/${WSGI_APPLICATION_NAME}
COPY ./${WSGI_APPLICATION_NAME} /var/www/${WSGI_APPLICATION_NAME}
# Install application dependencies from requirements.txt. You should not need to change these settings.
COPY ./requirements.txt /var/www/
RUN . /opt/python3/bin/activate && pip install -r /var/www/requirements.txt && rm /var/www/requirements.txt
RUN /container/setup.sh
