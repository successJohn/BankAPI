const {check} = require("express-validator");

exports.createAccountValidation = [
    check("accountType", "Please select a valid account Type").not().isEmpty(),
    check("pin", "Please enter your pin").not().isEmpty().isLength({min:4, max:4}),
    check("confirmPin", "Pin do not match").custom(
        (value, {req}) => value === req.body.pin
    )
]


exports.depositValidation =  [
    check("amount", "Amount is required").not().isEmpty() 
]

exports.withdrawalValidation =  [
    check("amount", "Amount is required").not().isEmpty(),
    check("pin", "Please enter your pin").not().isEmpty().isLength({min:4, max:4}),
    
]

exports.transferValidation = [
    check('amount', 'Amount is required').not().isEmpty(),
    check('pin', 'PIN is required').not().isEmpty(),
    check('accountNumber', 'Account Number is required').not().isEmpty(),
];

