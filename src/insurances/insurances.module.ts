import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InsuranceSchema } from './insurance.schema';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { CreateInsuranceDto } from './create-insurance-dto';

@Module({
    imports: [MongooseModule.forFeature([{name:'Insurance', schema: InsuranceSchema}])],
    providers: [InsurancesService],
    controllers: [InsurancesController]
})
export class InsurancesModule {

    constructor(private insuranceService: InsurancesService) {}

    async onModuleInit(){

        const data = [{
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
                }];

        for (const ins of data) {

            //await this.insuranceService.createInsurance(ins);
        }
        

        
    }
}
