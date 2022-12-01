import mongoose from 'mongoose';

const productosSchema = new mongoose.Schema({
    _id: { type: String, required: true, max: 50 },
    nombre: { type: String, required: true, max: 75 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true }
})

export const productosModel = mongoose.model('productos', productosSchema);