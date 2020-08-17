import { Module } from '@nestjs/common';
import { UselessController } from './useless/useless.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule.register({ secret: 'bonjour', signOptions: {expiresIn: '120s'} })],
  controllers: [UselessController]
})
export class StuffModule {}
