import { Document } from 'mongoose';

type insurance = 'Salud'
    | 'Familiar'
    | 'Dental';

export interface Insurance extends Document{
    cardNumber?: string;
    name?: string;
    type?: insurance;

}