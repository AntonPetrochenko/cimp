import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { AuthResponse } from 'src/auth/dto/AuthResponse.dto';
import { AuthRequest } from './dto/AuthRequest.dto';
import { Db } from 'mongodb';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(@Inject('MONGO') private db: Promise<Db>, private readonly jwtService: JwtService) {}

  async authenticate(authRequest: AuthRequest): Promise<AuthResponse> {
    let user = await (await this.db).collection('users').findOne({
      username: authRequest.username
    })
    if (user) {
      if (bcrypt.compareSync(authRequest.password,user.password)) {
        let token = this.jwtService.sign({
          sub: user._id,
          username: user.username
        })
        return new AuthResponse("success",token,user.username)
      } else {
        return new AuthResponse("failure")
      }
      
      
    } else {
      return new AuthResponse("failure")
    }
  }

  isValid(token: string): boolean {
    try {
      this.jwtService.verify(token)
      return true
    } catch {
      return false
    }
  }
}