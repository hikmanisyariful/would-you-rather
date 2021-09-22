import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import * as API from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());

    return API.getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
