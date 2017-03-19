import requests
import uuid
import json
import logging
import sys
import time

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
if not logger.handlers:
    handler = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter(
        '%(asctime)s - %(filename)s - %(funcName)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
logger.propagate = False


def captains_log(env, eventtype, data={}):
    """Log a captain's log via a POST to outpost"""

    dests = set(data.get("dests", ["captains-log"]))
    dests.add("captains-log")
    dests = list(dests)

    log = {
        "requestid": data.get("requestid", str(uuid.uuid4())),
        "eventtype": eventtype,
        "origin": data.get("origin", "teller-flask"),
        "dests": dests,
        "eventid": data.get("eventid", str(uuid.uuid4())),
        "tstamp_usec": int(time.time() * 1000 * 1000)
    }

    data.update(log)

    for _ in range(3):

        resp = requests.post(
            "http://reporting-outpost.apps.{env}.cirrostratus.org/raw-logger".format(
                env=env),
            data=json.dumps(data),
            headers={"Content-Type": "application/json"})

        if resp.status_code == 200:
            logger.info(resp.text)
            break
        else:
            logger.info("Got {code} from outpost".format(
                code=resp.status_code))
            logger.info(resp.text)
            time.sleep(1)
    else:
        logger.info("Failed to send timer to outpost: " + json.dumps(data))
        resp.raise_for_status()
