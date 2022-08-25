const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const cors= require("cors");
require("dotenv").config();

const usuarios = require("./routes/usuarios");
const auth = require("./routes/auth");


const app= express();
app.use(cors());
app.use(express.static(__dirname+"/frontend"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  },
  function (error,database) {
    if (error) {
        console.log(error);
        process.exit(1);
    }else{
      database,
      console.log("Conectados a la base de datos");
    }
  }
);

app.use("/api",usuarios); 
app.use("/api",auth);

app.listen(process.env.PORT, ()=>{
    console.log(`Aplicacion levantada en el puerto ${process.env.PORT}`)
  });