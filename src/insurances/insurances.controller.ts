import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { Insurance } from './insurances.interface';
import { CreateInsuranceDto } from './create-insurance-dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Insurances')
@Controller('insurances')
export class InsurancesController {

    constructor(private insuranceService: InsurancesService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'All insurances successfully obtained.'})
    async getInsurances(
        @Res() res): Promise<Insurance[]> {

        const users = await this.insuranceService.getInsurances();
        res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json(users);
    }

    
    @Post()
    @ApiResponse({ status: 201, description: 'The insurance has been successfully created.'})
    async createInsurance(
        @Res() res,
        @Body() createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {
        const insurance = await this.insuranceService.createInsurance(createInsuranceDto);
        res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json({
            message: 'Insurance Created',
            insurance
        });
    }

}
