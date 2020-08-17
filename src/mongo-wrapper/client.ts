import { Injectable } from '@nestjs/common';
import { MongoClient, Db} from 'mongodb'

@Injectable()
export class DatabaseConnection {
    db: Promise<Db> = MongoClient.connect(process.env.DBURI).then(
        async (mongo) => {
            const db: Db = await mongo.db("ag")
            const usersCollection = await db.collection("users")
            usersCollection.createIndex({username: "text"},{
                unique: true,
            })

            console.log(db)
            return db
        }
    ).catch((e) => {throw e})
}
