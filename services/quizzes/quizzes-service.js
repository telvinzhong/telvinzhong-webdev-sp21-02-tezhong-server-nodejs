const quizzes = require('./quizzes.json')

const findAllQuizzes = () => {
    return quizzes;
}

const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quizId === quiz._id
    })
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