import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequest } from './dto/AuthRequest.dto';
import { AuthResponse } from './dto/AuthResponse.dto';


@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() authRequest: AuthRequest): Promise<AuthResponse> {
    return await this.authService.authenticate(authRequest)
  }
}