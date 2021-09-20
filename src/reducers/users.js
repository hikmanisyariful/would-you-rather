import { RECEIVE_USERS, UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER_QUESTIONS:
      console.log("INI STATE", state);
      console.log("INI ACTION", action);
      let { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      };
    default:
      return state;
  }
}
