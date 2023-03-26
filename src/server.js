require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require ("./utils/AppError");
const uploadConfig = require("./configs/upload");


const cors = require("cors");
const express =  require("express");
/* Primeiro  importamos o express*/

const routes = require("./routes");
migrationsRun();

const app = express();//
 /*Inicializamos o Express*/
app.use(cors());
 /* declaramos que padrao vamos utilizar para receber informações que estamos usando */
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);


app.use(( error, request, response, next) =>{

    if(error instanceof AppError){ 
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status:"error",
        message:"Internal server error",
    })
} );


const PORT = 3333;
/*criamos o endereço ou seja o numero da porta */

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
 /*e quando a nossa aplicação iniciar ele vai executar esa menssagem no terminal */





 








