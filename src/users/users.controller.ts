import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Delete, Put, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    async getUsers(
        @Res() res): Promise<User[]> {

        const users = await this.usersService.getUsers();
        //res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:userId')
    async getUser(
        @Res() res,
        @Param('userId') userId: string): Promise<User> {

        const user = await this.usersService.getUser(userId);
        if (!user) throw new NotFoundException("User not found");
        //res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json(user);
    }


    @Post()
    async createUser(
        @Res() res,
        @Body() createUserDto: CreateUserDto): Promise<User> {

            Logger.log(createUserDto);
        const user = await this.usersService.createUser(createUserDto);
        //res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json({
            message: 'User Created',
            user
        });
    }

    @Delete('/:userId')
    async deleteUser(
        @Res() res,
        @Param('userId') userId: string): Promise<User> {
        const user = await this.usersService.deleteUser(userId);
        if (!user) throw new NotFoundException("User not found");
        return res.status(HttpStatus.OK).json({
            message: 'User Deleted',
            user
        });
    }

    @Put('/:userId')
    async updateUser(
        @Res() res, 
        @Body() updateUserDto: UpdateUserDto, 
        @Param('userId') userId): Promise<User> {

        
        const user = await this.usersService.updateUser(userId, updateUserDto);
        if (!user) throw new NotFoundException('User not found');
        //res.header('Access-Control-Allow-Origin', "*");
        return res.status(HttpStatus.OK).json({
            message: 'User Updated',
            user
        });
    }
}
