import * as API from "../utils/api";
import { updateUserQuestions, updateUserAnswers } from "./users";

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

function voteQuestion(payload) {
  return {
    type: VOTE_QUESTION,
    payload
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
      dispatch(updateUserQuestions(question));
    });
  };
}

export function handleVoteQuestion(qid, answer, user, question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    let payload = {
      authedUser,
      qid,
      answer
    };

    return API.saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(voteQuestion(payload));
      dispatch(updateUserAnswers(payload));
    });
  };
}
