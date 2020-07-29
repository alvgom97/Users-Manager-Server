import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty({
        description: 'Medical History Number',
    })
    nhc?: string;
    @ApiProperty({
        description: 'Medical Board Number',
    })
    medicalBoardNumber?: string;
    @ApiProperty({
        description: 'First Name',
    })
    firstName: string;
    @ApiProperty({
        description: 'Last Name',
    })
    lastName: string;
    @ApiProperty({
        description: 'Second Last Name',
        required: false
    })
    secondLastName?: string;
    @ApiProperty({
        description: 'Gender',
        required: false
    })
    gender?: string;
    @ApiProperty({
        description: 'Birthdate',
        required: false
    })
    birthdate?: string;
    @ApiProperty({
        description: 'Identity Number',
        required: false
    })
    identityNumber?: string;
    address: Address;
    @ApiProperty({
        description: 'Professional Type',
        required: false
    })
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