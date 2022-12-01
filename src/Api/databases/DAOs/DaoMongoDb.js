import { MongoDb } from "../connections/MongoDb.js";
import { productosModel } from "../Schemas/productosSchema.js";

export class DaoMongoDb extends MongoDb {

    constructor() {
        super();
        this.connect = MongoDb.getInstance();
    }

    async createProduct(product) {
        try {
            const toSave = new productosModel(product);
            const response = await toSave.save();
            return response;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }

    async readProducts() {
        try {
            return await productosModel.find({});
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }

    async getProductById(id) {
        try {
            const result =
                await productosModel
                    .find({ _id: id })
                    .limit(1);
            return result[0];
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }

    async updateProduct(product) {
        try {
            const { id, nombre, precio, stock } = product;

            const confirm =
                await productosModel
                    .updateOne({ _id: id }, {
                        $set: {
                            nombre: nombre,
                            precio: precio,
                            stock: stock
                        }
                    });
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }

    async deleteProduct(id) {
        try {
            const confirm =
                await productosModel
                    .deleteOne({ _id: id });
            return confirm.acknowledged;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }

}