import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
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
    professionalType?: string;
    @ApiProperty()
    insuranceList?: Insurance[];
}

export class Address {
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}

export class Insurance {
    cardNumber?: string;
    name?: string;
    type?: string;
}