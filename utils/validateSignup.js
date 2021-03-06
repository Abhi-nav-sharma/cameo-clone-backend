const {body}= require('express-validator')
const validateSignup= ()=>[body("name").not().isEmpty().withMessage("Name should not be empty").isString().withMessage('Name should be a string')
,body("email").not().isEmpty().withMessage("Email should not be empty").isString().withMessage("Email should be a string"),
body("password").not().isEmpty().withMessage("Password should not be empty").isLength({min:8}).withMessage("Password should have at least 8 characters").isString().withMessage('Password should be a string')
]

module.exports=validateSignup