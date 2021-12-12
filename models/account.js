const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountType = {
    SAVINGS: 'SAVINGS',
    CURRENT: 'CURRENT'
}
const AccountSchema = new Schema ({
    number: {
        type: Number,
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    transactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'TransactionHistory'
        }
    ],
    pin: {
        type: Number,
        default: null
    },
    accountType: {
        type: String,
        enum: [AccountType.SAVINGS, AccountType.CURRENT],
        default: Type.SAVINGS
    }
});

module.exports = mongoose.model("Account", AccountSchema)