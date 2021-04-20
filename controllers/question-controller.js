module.exports = (app) => {
    const QuestionsService = require('../services/questions/questions-service')

    const findALlQuestion = (req, res) => {
        QuestionsService.findAllQuestions()
            .then((questions) => {
                res.json(questions);
            })

    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        QuestionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                console.log(questions)
                res.json(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const qid = req.params['qid']
        QuestionsService.findQuestionById(qid)
            .then((question) => {
                res.json(question)
            })
    }

    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
    app.get('/api/questions', findALlQuestion)
    app.get('/api/questions/:qid', findQuestionById)
}