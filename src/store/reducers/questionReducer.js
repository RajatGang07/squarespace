import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    question: [{
        id: 0,
        question: "How to create new React Native Chat Bot?",
        relatedTopics: [{ id: 0, title: "javascript" }, { id: 1, title: "ReactNative" }],
        solutions: [{
            id: 0,
            ans: "You can check on medium",
            rating: 5,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }, {
            id: 1,
            ans: "You can check on stackoverflow",
            rating: 1,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }],
        questAuthor: 'Rajat',
        date: '10-12-1992'
    },
    {
        id: 1,
        question: "How to learn  React Native?",
        relatedTopics: [{ id: 0, title: "javascript" }, { id: 1, title: "ReactNative" }],
        solutions: [{
            id: 2,
            ans: "You can check on medium",
            rating: 4,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }, {
            id: 3,
            ans: "You can check on stackoverflow",
            rating: 3,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }],
        questAuthor: 'Tekion',
        date: '10-12-1992'
    },
    {
        id: 2,
        question: "What is difference between Flex browser and flex react natve?",
        relatedTopics: [{ id: 0, title: "javascript" }, { id: 1, title: "ReactNative" }],
        solutions: [{
            id: 4,
            ans: "You can check on medium",
            rating: 4,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }, {
            id: 5,
            ans: "You can check on stackoverflow",
            rating: 3,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }],
        questAuthor: 'Tekion',
        date: '10-12-1992'
    },
    {
        id: 3,
        question: "How to plan a trip to Goa?",
        relatedTopics: [{ id: 0, title: "trip" }, { id: 1, title: "travelling" },{ id: 2, title: "beer" }],
        solutions: [{
            id: 6,
            ans: "Not possible",
            rating: 4,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }, {
            id: 7,
            ans: "You can check on stackoverflow",
            rating: 3,
            solAuthor: 'Rajat',
            dateSol: '10-12-1992'
        }],
        questAuthor: 'Tekion',
        date: '10-12-1992'
    }]
};

const questionReducer = createReducer(initialState, {
    ADD_ANSWER: (state, action) => {
        const { question } = state;
        const { id, answer } = action.payload;
        question[id].solutions = [...question[id].solutions, { id: question[id].solutions.length + 1, ans: answer, rating: 3, solAuthor: 'Tekion', dateSol: '04-12-2019' }];
    },
    ADD_QUESTION: (state, action) => {
        let { question } = state;
        const { quest } = action.payload;
        question = [...question, { id: question.length + 1, question: quest, relatedTopics: [], solutions: [], questAuthor: 'Rajat', date: '02-01-2020' }];
    },
    DELETE_SOLUTION: (state, action) => {
        console.log("I ma here")
        const { question } = state;
        const { solutionId } = action.payload;
        question.forEach(function (o) {
            o.solutions = o.solutions.filter(s => s.id != solutionId);
        });
        console.log(question, "question")
    },

});

export default questionReducer;
