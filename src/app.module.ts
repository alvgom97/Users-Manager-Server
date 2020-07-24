import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { InsurancesModule } from './insurances/insurances.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, InsurancesModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}?retryWrites=true&w=majority`)
  ],
})
export class AppModule {}
