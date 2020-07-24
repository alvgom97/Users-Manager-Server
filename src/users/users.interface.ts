import { Insurance } from "../insurances/insurances.interface";
import { Document } from 'mongoose';

type professional = 'Médico'
    | 'Enfermero'
    | 'Administrativo';


export interface Address{
    street: string;
    number: string;
    door: string;
    postalCode: string;
    city: string;
}

export interface User extends Document{
    id?: string;
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
    insuranceList?: Insurance[];
}