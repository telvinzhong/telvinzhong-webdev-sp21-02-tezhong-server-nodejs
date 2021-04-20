const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => {
    return quizzesModel.find()
}

const findQuizById = (quizId) => {
    return quizzesModel.findById(quizId)
        .populate("questions")
        .exec()
}

module.exports = {
    findQuizById,
    findAllQuizzes
}