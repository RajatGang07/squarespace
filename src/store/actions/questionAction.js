export const addSolution = (id, answer) => (dispatch) => {
    dispatch({
        type: 'ADD_ANSWER',
        payload: { id, answer },
    });
};


export const addQuestion = (quest) => (dispatch) => {
    dispatch({
        type: 'ADD_QUESTION',
        payload: { quest },
    });
};



export const deleteReview = (questionId, solutionId) => (dispatch) => {
    dispatch({
      type: 'DELETE_SOLUTION',
      payload: {questionId, solutionId},
    });
  };
  