import { Module } from '@nestjs/common';
import { DatabaseConnection } from './client';
import {Db,MongoClient} from 'mongodb'

@Module({
  providers: [{
    provide: "MONGO",
    useFactory: async (): Promise<Db> => {
      try {
        const client = await MongoClient.connect(process.env.DBURI)
        const db = client.db("cimpleo")

        await db.collection('users').createIndex({username: "text"},{unique: true})
        
        return db
      } catch(e) {
        throw (e)
      }
    }
  }],
  exports: ['MONGO']
})
export class MongoWrapperModule {}


