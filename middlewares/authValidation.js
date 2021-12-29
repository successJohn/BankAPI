const {check} = require("express-validator");


exports.registerValidation = [
    check("email", "Please enter a valid email").isEmail(),
    check("firstName", "firstName is required").not().isEmpty(),
    check("lastName", "lastName is required").not().isEmpty(),
    check("password", "please enter an alphanumeric password with 6 or more characters").isAlphanumeric().isLength({min:6}),
    check("confirmPassword", "Passwords do not match").custom(
        (value, {req}) =>  value === req.body.password
    )
];

exports.loginValidation = [
    check('email', "please enter a valid email").isEmail(),
    check("password","please enter an alphanumeric password with 6 or more characters").isAlphanumeric().isLength({min:6})
]

exports.verifyEmailValidation = [
    check('email', 'Please include a valid email').isEmail(),
    check('otp', 'Please include a valid otp').not().isEmpty()
];

exports.validateEmail = [
    check('email', 'Please include a valid email').isEmail()
];