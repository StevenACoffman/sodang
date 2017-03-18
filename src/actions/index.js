/*eslint no-console: "off"*/
import * as actionTypes from "./actionTypes";

export const postFeedback = body => ({ type: actionTypes.POST_FEEDBACK, payload: body });
export const postFeedbackFulfilled = payload => ({ type: actionTypes.POST_FEEDBACK_FULFILLED, payload });
export const postFeedbackRejected = payload => ({ type: actionTypes.POST_FEEDBACK_REJECTED, payload, error: true });
export const ping = () => ({ type: actionTypes.PING });
export const pong = () => ({ type: actionTypes.PONG });
