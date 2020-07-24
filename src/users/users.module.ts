import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InsurancesModule } from 'src/insurances/insurances.module';

@Module({
    imports: [
        InsurancesModule,
        MongooseModule.forFeature([{name:'User', schema: UserSchema}])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
