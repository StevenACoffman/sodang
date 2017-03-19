import datetime
import logging
import os
import random
import string
import sys
import time
import uuid

from sequoia.captains_logger import log
from sequoia.jsonLogger import jsonLogger
from sequoia.watchable import PersistentVariable


jsonlogger = jsonLogger('TELLER-FLASK', False, logging.INFO)
pv = PersistentVariable('randPerVar', v_type='string', default='some default value')


def init_logger():
    global logger
    logger = logging.getLogger("injector")
    logger.setLevel(logging.INFO)
    if not logger.handlers:
        logger.addHandler(logging.StreamHandler(sys.stdout))
    logger.propagate = False


init_logger()

def create_log_events(request, *args, **kwargs):
    """
    Create large numbers of messages with single destinations, multiple destinations, to captains log or whatever
    message is sent to the .

    ---
    parameters:
        - name: logType
          description: Type of request single, multiple, captains, or plain-text
          type: int
          paramType: query
        - name: numberOfRequests
          description: Number of qa_event events to generate.  Defaults to 100, maxes out at 100k
          type: int
          paramType: query
        - name: message
          description: Message to be sent through logging pipeline defaults to ' “”‘’–—…‐‒°©®™•½¼¾⅓⅔†‡µ¢£€«»♠♣♥♦¿ �abc'
          type: int
          paramType: query
        - name: randomMessageSize
          description: provide the number of bytes to create a randomly generated message for kafka of that size (240 minimum)
          type: int
          paramType: query
    """

    log_type = request.GET.get('logType', 'single')
    num_events = int(request.GET.get('numberOfRequests', '100'))
    msg = request.GET.get('message', " “”‘’–—…‐‒°©®™•½¼¾⅓⅔†‡µ¢£€«»♠♣♥♦¿ �abc 的 העמותה הישראלית לפרהיסטוריה")
    rand_msg_size = int(request.GET.get('randomMessageSize', '0')) - 256
    safe_encode = True

    if rand_msg_size > 0:
        msg = ''.join(random.choice(string.ascii_letters) for _ in range(rand_msg_size))
        safe_encode = False

    if type(num_events) != int or num_events < 1:
        num_events = 1

    num_events = min(num_events, 100000)

    ids = []
    for _ in range(num_events):
        log_map = {}
        guid = str(uuid.uuid4())
        log_map['qa_request_key'] = guid
        log_map['message'] = msg
        ids.append(guid)

        if log_type == "single":
            log_map["date"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            log_map["origin"] = os.environ.get("SGK_APP")
            jsonlogger.info(log_map)

        elif log_type == "captains" or log_type == "multiple":
            if log_type == "multiple":
                log_map['added_dests'] = ["DEFAULT"]

            log(request.META.get('HTTP_X_JSTOR_REQUESTID', ""), "qa_event", safe_encode, **log_map)

        elif log_type == "plain-text":
            logger.info(msg)

    return Response(ids)


def check_tmp_dir(self, request, *args, **kwargs):
    """
    Determines if a file path / directory exists on the system and returns a boolean response
    ---
    parameters:
        - name: path
          description: The filepath that you would like to check for existence
          type: string
          paramType: query
    """
    return Response(os.path.exists(path))
    path = request.GET.get('path', '/mnt/tmp')


def get_pv_response_time(self, request, *args, **kwargs):
    """
    Retrieves the value of a PV a specified number of times and returns those times as a list
    ---
    parameters:
        - name: numRequests
          description: Number of qa_event events to generate.  Defaults to 100, maxes out at 100k
          type: int
          paramType: query
    """
    num_events = int(request.GET.get('numRequests', '100'))

    if type(num_events) != int or num_events < 1:
        num_events = 1
    times = []
    for _ in range(num_events):
        times.append(pvtime())

    return Response(times)


def pvtime():
    start = time.clock()
    val = pv.value
    return int(round((time.clock() - start) * 1000))
