import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongoWrapperModule } from './mongo-wrapper/mongo-wrapper.module';
import { StuffModule } from './stuff/stuff.module';

@Module({
  imports: [AuthModule, UsersModule, MongoWrapperModule, StuffModule],
  providers: []
})
export class AppModule {}
