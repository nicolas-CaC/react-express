import { DaoMongoDb } from "../databases/DAOs/DaoMongoDb.js";
import { v4 as uuid } from 'uuid';

export class ApiServices {

    static #db = new DaoMongoDb();

    // Métodos MONGO DB

    async crearProducto(producto) {
        const finalProduct = { _id: uuid(), ...producto };
        const response = ApiServices.#db.createProduct(finalProduct);
        return response;
    }

    async cargarProducto(id) {
        const resultado = await ApiServices.#db.getProductById(id);
        return resultado;
    }

    async cargarProductos() {
        const resultado = await ApiServices.#db.readProducts();
        return resultado;
    }

    async modificarProducto(producto) {
        const confirmacion = await ApiServices.#db.updateProduct(producto);
        return confirmacion;
    }

    async borrarProducto(id) {
        const confirmacion = await ApiServices.#db.deleteProduct(id);
        return confirmacion;
    }
}   
