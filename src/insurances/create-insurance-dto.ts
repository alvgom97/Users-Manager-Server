export class CreateInsuranceDto {
    cardNumber?: string;
    name?: string;
    type?: string;
}

type insurance = 'Salud'
    | 'Familiar'
    | 'Dental';