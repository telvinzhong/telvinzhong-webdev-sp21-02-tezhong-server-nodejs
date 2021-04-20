const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestion = 0;
    questions.forEach(question => question.answer === question.correct?
    numberOfCorrectQuestion++: numberOfCorrectQuestion)
    return 100 * numberOfCorrectQuestion/questions.length
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsModel.find({quiz: quizId})
        .populate('quiz', 'title _id')
        .exec()
}

const createAttempt = (qid, attempt) => {
    return quizAttemptsModel.create({quiz: qid, answers: attempt, score: scoreQuiz(attempt)})
}

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}