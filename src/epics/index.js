import { Observable } from "rxjs";
import * as actionType from "../actions/actionTypes";
import {fetchSaveOutline} from "../actions";
import {connect} from "react-redux";
import { combineEpics } from "redux-observable";
import { ajax } from 'rxjs/observable/dom/ajax';


const rootEpic = action$ =>
  action$.filter(action => action.type === "PING")
    .mapTo({ type: "PONG" });

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

const fetchUser = id => ({ type: FETCH_USER, payload: id });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
const fetchUserRejected = payload => ({ type: FETCH_USER_REJECTED, payload, error: true });

const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax({url:`/api/users/${action.payload}`, method:"POST"})
        .map(response => fetchUserFulfilled(response))
        .catch(error => Observable.of(
          fetchUserRejected(error.xhr.response)
        ))
    );

/*
const logEpic = (action$) => {
  console.log('only logs once');
  return new Observable(observer => {
    console.log('only logs once');
    return action$.subscribe(action => {
      console.log('logs for every action received');
      const newAction = action;// do transforms
      observer.next(newAction); // output of your epic
    });
  });
};*/
/*
function main() {
  return {
    timerStream: Rx.Observable.interval(1000).map(() => {
      const date = new Date();
      return [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ].map(time => {
        return time < 10 ? `0${time}` : time;
      }).join(':');
    })
  }
}

function timerStreamDriver(timerStream) {
  const timer = document.createElement('DIV');
  document.body.appendChild(timer);
  timerStream.subscribe(time => {
    document.bgColor = timer.textContent = `#${time}`;
  });
}

const drivers = {
  timerStream: timerStreamDriver
}

function run(mainFn, drivers) {
  const sinks = mainFn();
  Object.keys(drivers).forEach(key => {
    drivers[key](sinks[key]);
  });
}

run(main, drivers);

const autosaveEpic = action$ => {
    return action$
      .filter(action => actionType.DIRTY_ACTIONS.includes(action.type))
      .debounce(() => Observable.timer(3000))
      .mapTo(fetchSaveOutline());
};

export const rootEpic = combineEpics(
  pingEpic,
  fetchUserEpic
);
*/

export { rootEpic };
