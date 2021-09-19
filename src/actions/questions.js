import * as API from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTION = "VOTE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function voteQuestion(answer) {
  return {
    type: VOTE_QUESTION,
    answer
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return API.saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }).then(question => {
      dispatch(addQuestion(question));
    });
  };
}
