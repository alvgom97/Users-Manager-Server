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
export class InsurancesModule {}
