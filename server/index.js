//REQUERIMIENTOS
require('./config');
const express = require('express');
const moongose = require('mongoose');
//const bodyParse = require('body-parser');
const cors = require('cors');

//Variable para tener accesso a las funcionalidades de express.
const app = express();

//MIDELWARES
//app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
//MONGOOSE DEPRECATORS
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);

//RUTAS
app.use(require('./routes/empleados.route'))

//CONEXION A LA BASE 
moongose.connect('mongodb://localhost:27017/apicrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, res) =>{
    if(err) throw err
    console.log("Conectado a la base de datos")
}
)

//SALIDA PUERTO HTTP
app.listen(process.env.PORT, () => {
    console.log(`SERVER LISTEN ON PORT: ${process.env.PORT}`);
})