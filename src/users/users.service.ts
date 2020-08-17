import { Injectable, Inject } from '@nestjs/common';
import { RegisterResponse } from './dto/RegisterResponse.dto';
import { RegisterRequest } from './dto/RegisterRequest.dto';
import { DatabaseConnection } from 'src/mongo-wrapper/client';
import { Db, Collection, InsertOneWriteOpResult } from 'mongodb'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(@Inject('MONGO') private db: Promise<Db>) {}

    async register(registerRequest: RegisterRequest): Promise<RegisterResponse> {
        let usersCollection: Collection = await (await this.db).collection('users')
        let serverResponse = await usersCollection.insertOne(
            {
                username: registerRequest.username,
                password: bcrypt.hashSync(registerRequest.password,10)
            }
        )
        .then(() => {
            return new RegisterResponse("success")
        })
        .catch((e) => {
            console.log(e)
            return new RegisterResponse("failure")
        })
        return serverResponse
    }
}
