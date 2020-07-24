import { Injectable } from '@nestjs/common';
import { User } from './users.interface';
import { CreateUserDto } from './create-user-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getUsers(): Promise<User[]>{
        const users = await this.userModel.find()
        return users;
    }

    async getUser(userId: string): Promise<User>{
        const user = await this.userModel.findById(userId)
        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {

        const user = new this.userModel(createUserDto);
        return await user.save();
    }

    async deleteUser(userId: string): Promise<User> {

        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        return deletedUser;
    }

    async updateUser(userId: string, createUserDto: CreateUserDto): Promise<User> {

        const updatedUser = await this.userModel.findByIdAndUpdate(createUserDto, { new: true});
        return updatedUser;
    }
}
