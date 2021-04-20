const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
    return questionsModel.find()
}


const findQuestionsById = (qId) => {
    return questionsModel.findById(qId)
}

const findQuestionsForQuiz = (quizId) => {
    return quizzesModel.findById(quizId)
        .populate('questions')
        .then(quiz => quiz.questions)
}

module.exports = {
    findQuestionsForQuiz,
    findAllQuestions,
    findQuestionsById
}