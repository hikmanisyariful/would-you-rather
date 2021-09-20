export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function updateUserQuestions(question) {
  return {
    type: UPDATE_USER_QUESTIONS,
    question
  };
}
