//IMPORTAMOS EL MODELO
const Empleados = require('../models/empleados.model');

/* FUNCION TIPO GET MOSTRAR EMPLEADOS */
let mostrarEmpleados = (req, res) => {
    Empleados.find({})
    .exec((err ,data) => {
        if(err){
            return res.json({
                status: 500,
                mensaje: "error en la peticion"
            })
        }

        //Contamos la cantidad de registros
        Empleados.countDocuments({}, (err, total) => {
            if(err){
                return res.json({
                    status: 500,
                    mensaje: "error en la petcion"
                })
            }
            res.json({
                status:200,
                total,
                data
            })
        })
    })
}

let mostrarUnEmpleados = (req, res) => {
    let id = req.params.id;

    //VALIDAMOS QUE EL ID EXISTA
    Empleados.findById(id, (err, data) => {
        //Validamos el proceso en caso de que exista un error 
        if(err){
            return res.json({
                status: 500,
                mensaje: "Error en el servidor",
                err
            })
        }

        //Validamos que el administrador exista 
        if(!data){
            return res.json({
                status: 400,
                mensaje: "El Administrador no existe"
            })
        }

        //Contamos la cantidad de registros
        Empleados.countDocuments({}, (err, total) => {
            if(err){
                return res.json({
                    status: 500,
                    mensaje: "error en la petcion"
                })
            }
            res.json({
                status:200,
                total,
                data
            })
        })
    })
}


/* FUNCION POST CREAR UN EMPLEADOS */
let crearEmpleado = (req,res) => {
    let body = req.body;
    console.log(body);
    //Obtenemos el Cuerpo del Formulario para para insertarlo
    let empleado = new Empleados({
        nombre: body.nombre,
        puesto: body.puesto,
        lugar: body.lugar,
        salario: body.salario
    });
    //console.log(empleado);
    //GUARDAMOS EN MONGO
    empleado.save((err,data) => {
        if(err){
            return res.json({
                status: 400,
                mensaje: "Error al almacenar al empleado",
                err
            })
        }
        res.json({
            status: 200,
            data,
            mensaje: "El empleado se ha almacenado con exito"
        })
    })
}

/* FUNCION PUT EDITAR DATOS  */
 let editarEmpleado = (req, res)  => {
    let id = req.params.id;
    //console.log(id);

    //Obtenemos el body
    
    let body = req.body;
    /*console.log(body);*/
    
    //Validamos que el empleado exista
    Empleados.findById(id, (err,data)=>{
        //VALIDAMOS EL PROCESO 
        if(err){
            return res.json({
                status: 500,
                mensaje: "Error en el servidor",
                err
            })
        }

        //Validamos que el empleado exista en la bd
        if(!data){
            return res.json({
                status: 400,
                mensaje: "El empleado no existe en la base de datos"
            })
        }

        //Si existe el empleado obtenemos los datos
        let datosEmpleado = {
            nombre: body.nombre,
            puesto: body.puesto,
            lugar: body.lugar,
            salario: body.salario
        }

        Empleados.findByIdAndUpdate(id,datosEmpleado, (err,data)=>{
            if(err){
                return res.json({
                    status: 400,
                    mensaje: "Error al actualizar al empleado",
                    err
                })
            }
            res.json({
                status: 200,
                data,
                mensaje: "El empleado se ha actualizado con exito"
            })
        })
    })
 }

let borrarEmpleado = (req, res) =>{
    //Capturamos el id a borrar
    let id = req.params.id;

    //VALIDAMOS QUE EL ID EXISTA
    Empleados.findById(id, (err, data) => {
        //Validamos el proceso en caso de que exista un error 
        if(err){
            return res.json({
                status: 500,
                mensaje: "Error en el servidor",
                err
            })
        }

        //Validamos que el administrador exista 
        if(!data){
            return res.json({
                status: 400,
                mensaje: "El Administrador no existe"
            })
        }

        //Eliminamos el resgistro en mongo
        Empleados.findByIdAndRemove(id, (err, data) => {
            if(err){
                return res.json({
                    status: 500,
                    mensaje: "Error al eliminar al Empleado"
                })
            }

            res.json({
                status: 200,
                mensaje: "El Empleado ha sido eliminado exitosamente"
            })
        })
    })
}


module.exports = {
    mostrarEmpleados,
    mostrarUnEmpleados,
    crearEmpleado,
    editarEmpleado,
    borrarEmpleado
}