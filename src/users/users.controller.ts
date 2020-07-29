import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Delete, Put, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';
import { CreateUserDto } from './create-user-dto';
import { UpdateUserDto } from './update-user-dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'All users successfully obtained.'})
    async getUsers(
        @Res() res): Promise<User[]> {

        const users = await this.usersService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:userId')
    @ApiResponse({ status: 200, description: 'User successfully obtained.'})
    async getUser(
        @Res() res,
        @Param('userId') userId: string): Promise<User> {

        const user = await this.usersService.getUser(userId);
        if (!user) throw new NotFoundException("User not found");
        return res.status(HttpStatus.OK).json(user);
    }


    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
    async createUser(
        @Res() res,
        @Body() createUserDto: CreateUserDto): Promise<User> {
        const user = await this.usersService.createUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            message: 'User Created',
            user
        });
    }

    @Delete('/:userId')
    @ApiResponse({ status: 201, description: 'The user has been successfully deleted.'})
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
    @ApiResponse({ status: 201, description: 'The user has been successfully updated.'})
    async updateUser(
        @Res() res, 
        @Body() updateUserDto: UpdateUserDto, 
        @Param('userId') userId): Promise<User> {

        
        const user = await this.usersService.updateUser(userId, updateUserDto);
        if (!user) throw new NotFoundException('User not found');
        return res.status(HttpStatus.OK).json({
            message: 'User Updated',
            user
        });
    }
}
