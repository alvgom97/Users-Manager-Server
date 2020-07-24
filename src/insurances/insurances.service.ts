import { Injectable } from '@nestjs/common';
import { Insurance } from './insurances.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInsuranceDto } from './create-insurance-dto';

@Injectable()
export class InsurancesService {

    constructor(@InjectModel('Insurance') private insuranceModel: Model<Insurance>){}

    async getInsurances(): Promise<Insurance[]>{
        const insurances = await this.insuranceModel.find()
        return insurances;
    }

    async createInsurance(createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {

        const insurance = new this.insuranceModel(createInsuranceDto);
        return await insurance.save();
    }

}
