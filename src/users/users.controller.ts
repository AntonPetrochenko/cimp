import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterRequest } from './dto/RegisterRequest.dto';
import { RegisterResponse } from './dto/RegisterResponse.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Post()
    async create(@Body() registerRequest: RegisterRequest): Promise<RegisterResponse> {
        return await this.usersService.register(registerRequest)
    }

}
