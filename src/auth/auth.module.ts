import { Module, Global } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongoWrapperModule } from 'src/mongo-wrapper/mongo-wrapper.module';
@Module({
    imports: [MongoWrapperModule,JwtModule.register({ secret: 'bonjour', signOptions: {expiresIn: '120s'} })],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
