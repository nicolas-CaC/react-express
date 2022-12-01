const boton = document.getElementById('boton')
const boton2 = document.getElementById('boton2')

const datito = {
    nombre: 'Pedrito',
    hobby: 'Jugar a la pelota'
}

const usuario = {
    nombre: 'Pepe',
    edad: 32,
    soltero: true
}

function llamado() {
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    })
        .then(res => res.json())
        .then(respuesta => console.log(respuesta))
}

boton.onclick = () => { llamado() }

llamado()

