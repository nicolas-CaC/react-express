import express from 'express';
import { ApiRouter } from '../Api/routes/ApiRouter.js';

let instance = null;

export class Server {

    static app = express();
    static router = express.Router();
    static api = new ApiRouter().getApi(Server.router)

    constructor(port) {
        this.port = port;
    }

    static getInstance(port) {
        if (!instance) instance = new Server(port);
        return instance
    }

    run() {
        // ATENCION AL ORDEN
        // Me permite recibir JSON
        Server.app.use(express.json())
        // Me permite recibir otros tipos de elementos
        Server.app.use(express.urlencoded({ extended: true }))
        // Me habilita el acceso a la carpeta lubic para repartir archivos
        Server.app.use(express.static('public'))
        // Uso las apis del router
        Server.app.use(Server.api)
        //Pongo en funcionamiento el servidor
        Server.app.listen(this.port, () => {
            console.log(`Server listening at ${this.port} - http://localhost:${this.port}`)
        })
    }
}