let questions = require('./questions.json')

const findAllQuestions = () => {
    return questions;
}

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

const createQuestion = () => {

}
const updateQuestion = () => {}

const deleteQuestion = () => {}

module.exports = {
    findQuestionsForQuiz,
    findAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
}