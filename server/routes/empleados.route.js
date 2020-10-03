const express = require('express');
const app = express();

//IMPORTAMOS EL COTROLADOR
const Empleados = require('../controllers/empleados.controller');

//CREAMOS LAS RUTAS
app.get('/mostrar-empleados',Empleados.mostrarEmpleados);
app.get('/mostrar-empleado/:id',Empleados.mostrarUnEmpleados);
app.post('/crear-emplado', Empleados.crearEmpleado);
app.put('/editar-empleado/:id', Empleados.editarEmpleado);
app.delete('/borrar-empleado/:id', Empleados.borrarEmpleado);

module.exports = app;