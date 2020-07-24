import * as mongoose from 'mongoose';

export const InsuranceSchema = new mongoose.Schema({
    cardNumber: String,
    name: String,
    type: mongoose.Schema.Types.Mixed
});