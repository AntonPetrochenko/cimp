import { CanActivate, ExecutionContext, Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DumpsterguardGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    var authHeader: string
    var authMatch: any
    var authToken: string
    authHeader = context.switchToHttp().getRequest().headers.authorization
    if (authHeader) {
      authMatch = authHeader.match(/^Bearer (.*)$/)
    } else {
      throw new UnauthorizedException()
    }
    if (authMatch) {
      authToken = authMatch[1]
    }
    try {
      this.jwtService.verify(authToken)
      return true
    } catch(e) {
      throw new UnauthorizedException()
      return false
    }
    
  }
}
