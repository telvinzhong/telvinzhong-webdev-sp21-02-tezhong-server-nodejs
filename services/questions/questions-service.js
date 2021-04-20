const questions = require('./questions.json')
const questionsDao = require('../../daos/questions-dao')

const questionsModel = require("../../models/questions/questions-model")

const findAllQuestions = () => {
    // return questions;
    // return questionsModel.find()
    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid);
}

const findQuestionById = (qid) => {
    return questionsDao.findQuestionsById(qid)
}


const createQuestion = () => {
}
const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
    findQuestionsForQuiz,
    findQuestionById,
    findAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
}