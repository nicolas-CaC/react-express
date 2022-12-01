export class RedirectController {


    static get controllers() {
        return new RedirectController();
    }

    googleRedirect(req, res) {
        res.redirect('http://www.google.com')
    }

    mlRedirect(req, res) {
        const { elemento } = req.params
        res.redirect(`http://listado.mercadolibre.com.ar/${elemento}`)
    }

    obtenerNombre(req, res) {
        const { nombre, apellido, edad, soltero } = req.query;

        soltero
            ? res.json({
                name: nombre,
                lastname: apellido,
                age: Number(edad),
                condition: 'Ud es un potencial comprador'
            })
            : res.json({
                name: nombre,
                lastname: apellido,
                age: Number(edad),
                condition: 'Señor: Mejor no compre'
            })
    }

    goContacto(req, res) {
        res.redirect('contacto.html')
    }

}