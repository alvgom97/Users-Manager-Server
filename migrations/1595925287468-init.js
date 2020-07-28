/**
 * Make any changes you need to make to the database here
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
});

const InsuranceSchema = new Schema({
  cardNumber: String,
  name: String,
  type: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('user', UserSchema);
module.exports = mongoose.model('insurance', InsuranceSchema);

async function up() {
  // Write migration here

  const users = [{
      "nhc": "0123456769",
      "firstName": "Alvaro",
      "lastName": "Gomez",
      "secondLastName": null,
      "gender": "Hombre",
      "birthdate": "04/05/1997",
      "identityNumber": null,
      "address": {
        "street": "Calle Ciudad Real",
        "number": "1",
        "door": "4ºD",
        "postalCode": "28922",
        "city": "Alcorcón"
      }
    },
    {
      "medicalBoardNumber": "6969696969",
      "firstName": "Jorge",
      "lastName": "Martin",
      "secondLastName": "García",
      "gender": "No Binario",
      "birthdate": "28/10/1995",
      "identityNumber": null,
      "address": {
        "street": "Calle San Fermín",
        "number": "2",
        "door": "2ªB",
        "postalCode": "29576",
        "city": "Orcasitas"
      },
      "professionalType": "Enfermero"
    }
  ];

  const insurances = [{
      "cardNumber": "3657415895",
      "name": "Adeslas",
      "type": "Salud"
    },
    {
      "cardNumber": "1257895426",
      "name": "Mapfre",
      "type": "Dental"
    },
    {
      "cardNumber": "1254785412",
      "name": "Mutua Madrileña",
      "type": "Familiar"
    },
    {
      "cardNumber": "9658741236",
      "name": "Línea Directa",
      "type": "Familiar"
    },
    {
      "cardNumber": "6541287594",
      "name": "RACE",
      "type": "Salud"
    },
    {
      "cardNumber": "2547895456",
      "name": "Sanitas",
      "type": "Dental"
    }
  ];

  await this('user').insertMany(users);

  await this('insurance').insertMany(insurances);


}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = {
  up,
  down
};