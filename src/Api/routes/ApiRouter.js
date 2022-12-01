import { ApiController } from "../controllers/ApiController.js";
import { RedirectController } from "../controllers/RedirectController.js";

export class ApiRouter {

    static #controller = ApiController.controllers;
    static #redirectsController = RedirectController.controllers;

    getApi(router) {

        return router
            // Contacto
            .get('/contacto', ApiRouter.#redirectsController.goContacto)

            // Productos
            .get('/prod', ApiRouter.#controller.irIndex)
            .get('/prod/all', ApiRouter.#controller.cargarProductos)
            .get('/prod/:id', ApiRouter.#controller.cargarProducto)
            .post('/prod', ApiRouter.#controller.crearProducto)
            .put('/prod', ApiRouter.#controller.modificarProducto)
            .delete('/prod/:id', ApiRouter.#controller.borrarProducto);
    }
}