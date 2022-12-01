import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let instance = null;

export class MongoDb {

    static async getInstance() {

        if (!instance) {
            instance = new MongoDb();
        }

        try {
            console.log('Conectado a MongoDb...');
            mongoose.connect(process.env.MONGO_URL);
            console.log('Mongo: Conexion exitosa');
        }
        catch (err) {
            console.log('MongoDb: Error de conexión:', err)
        }

    }
}