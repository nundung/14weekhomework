const { validationResult } = require('express-validator')
const validator = require('validator')

const validatorErrorChecker = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg)
        return res.status(400).json({ errors: errorMessages })
    }
    next()
}

module.exports = {
    validatorErrorChecker
}