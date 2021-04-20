module.exports = (app) => {
    const quizzesService = require('../services/quizzes/quizzes-service')

    const findAllQuizzes = (req, res) => {

        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.json(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.json(quiz)
            })
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}