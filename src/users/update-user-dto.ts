export class UpdateUserDto {
    nhc?: string;
    medicalBoardNumber?: string;
    firstName: string;
    lastName: string;
    secondLastName?: string;
    gender?: string;
    birthdate?: string;
    identityNumber?: string;
    address: Address;
    professionalType?: professional;
}

type professional = 'Médico'
    | 'Enfermero'
    | 'Administrativo';


export class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}

type insurance = 'Salud'
    | 'Familiar'
    | 'Dental';

export class Insurance {
    cardNumber?: string;
    name?: string;
    type?: insurance;
}