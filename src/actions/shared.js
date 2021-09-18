import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import * as API from "../utils/api";

export function handleInitialData() {
  return dispatch => {
    return API.getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
