module.exports = (app) => {
    const QuestionsService = require('../services/questions/questions-service')

    const findALlQuestion = (req, res) => {
        const questions = QuestionsService.findAllQuestions();
        res.send(questions);
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions = QuestionsService.findQuestionsForQuiz(quizId)
        res.send(questions)
    }

    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
    app.get('/api/questions', findALlQuestion)
}