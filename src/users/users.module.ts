import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongoWrapperModule } from 'src/mongo-wrapper/mongo-wrapper.module';

@Module({
  imports: [MongoWrapperModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
