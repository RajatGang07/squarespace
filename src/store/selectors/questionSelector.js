import _get from 'lodash/get';

export const getQuestionList = state => _get(state, 'question.question', {}); 

