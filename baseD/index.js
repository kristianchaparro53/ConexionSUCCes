const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');
const app = express();

connectDb();

app.use(cors());
app.use(express.json());    

//Esta linea es importa la rutas que estan el la carpeta rutas en el archivo usuario.
app.use("/users", require("./routes/users"))



app.listen(4000, () => {
    console.log("servidor corriendo en el puerto 4000")
})

