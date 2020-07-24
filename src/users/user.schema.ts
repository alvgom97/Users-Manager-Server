import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    nhc: String,
    medicalBoardNumber: String,
    firstName: String,
    lastName: String,
    secondLastName: String,
    gender: String,
    birthdate: String,
    identityNumber: String,
    address: {
        street: String,
        number: String,
        door: String,
        postalCode: String,
        city: String
    },
    professionalType: Schema.Types.Mixed,
    insuranceList: [{type: Schema.Types.ObjectId, ref: "Insurance"}]
});



