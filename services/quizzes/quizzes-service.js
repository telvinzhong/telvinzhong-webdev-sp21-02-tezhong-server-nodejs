const quizzesDao =require('../../daos/quizzes-dao')

const quizzesModel = require('../../models/quizzes/quizzes-model')

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
}

const createQuiz = () => {

}
const updateQuiz = () => {}

const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}