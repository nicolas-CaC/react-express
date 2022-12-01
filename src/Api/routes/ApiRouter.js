import { ApiController } from "../controllers/ApiController.js";
import { RedirectController } from "../controllers/RedirectController.js";

export class ApiRouter {

    static #controller = ApiController.controllers;

    getApi(router) {

        return router

            // Productos
            .get('/prod', ApiRouter.#controller.irIndex)
            .get('/prod/all', ApiRouter.#controller.cargarProductos)
            .get('/prod/:id', ApiRouter.#controller.cargarProducto)
            .post('/prod', ApiRouter.#controller.crearProducto)
            .put('/prod', ApiRouter.#controller.modificarProducto)
            .delete('/prod/:id', ApiRouter.#controller.borrarProducto);
    }
}