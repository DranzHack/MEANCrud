//ESDQUEMA PARA EL MODELO CONECTOR A MONGO DE LA COLECCION EMPLEADOS
const moogose = require('mongoose');

let Schema = moogose.Schema;

//CREAMOS EL SCHEMA DE LA COLECCION
let empleadosSchema = new Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    puesto:{
        type: String,
        required: [true, "El Puesto es obligatorio"]
    },
    lugar:{
        type: String,
        required: [true, "El Lugar es obligatorio"]
    },
    salario:{
        type: Number,
        required: false
    }
});

//ESPORTAMOS EL MODELO
module.exports = moogose.model('empleados', empleadosSchema);

