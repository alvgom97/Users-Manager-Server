export class CreateInsuranceDto {
    cardNumber?: string;
    name?: string;
    type?: insurance;
}

type insurance = 'Salud'
    | 'Familiar'
    | 'Dental';