import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import * as API from "../utils/api";

// Dummy Authed User
const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return dispatch => {
    return API.getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
