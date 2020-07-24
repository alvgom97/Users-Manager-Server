import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { InsurancesModule } from './insurances/insurances.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin69@mycluster.qylyg.gcp.mongodb.net/UsersManager?retryWrites=true&w=majority'), UsersModule, InsurancesModule],
})
export class AppModule {}
