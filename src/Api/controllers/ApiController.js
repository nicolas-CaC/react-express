import { ApiServices } from "../services/ApiServices.js";

export class ApiController {

    static #services = new ApiServices();

    static get controllers() {
        return new ApiController();
    }

    // Producto

    irIndex(req, res) {
        res.redirect('producto.html')
    }

    // MONGODB

    // GET /prod/all
    async cargarProductos(req, res) {
        const resultado = await ApiController.#services.cargarProductos();
        resultado
            ? res.json(resultado)
            : res.json({ error: 1 })
    }

    // GET /prod/:id
    async cargarProducto(req, res) {
        const { id } = req.params;
        const resultado = await ApiController.#services.cargarProducto(id);
        resultado
            ? res.json(resultado)
            : res.json({ error: 1 });
    }

    // POST /prod
    async crearProducto(req, res) {
        const booleano = await ApiController.#services.crearProducto(req.body);
        booleano
            ? res.json({ error: 0 })
            : res.json({ error: 1 });
    }

    // PUT /prod
    async modificarProducto(req, res) {
        const producto = req.body;
        const resultado = await ApiController.#services.modificarProducto(producto);
        resultado
            ? res.json({ error: 0 })
            : res.json({ error: 1 });
    }

    // DELETE /prod/:id
    async borrarProducto(req, res) {
        const { id } = req.params;
        const resultado = await ApiController.#services.borrarProducto(id);
        resultado
            ? res.json({ error: 0 })
            : res.json({ error: 1 })
    }
}