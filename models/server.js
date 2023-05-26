const express = require('express')

const {dbConnection} = require('../database/config')

class Server {
    constructor(){
        this.app = express()
        this.port= process.env.PORT // capturando variable de entorno
        this.ejerciciosPath = '/api/ejercicio' // ruta publica
        this.routes()
        this.middlewares()
        this.conectarDB()
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log (`Escuchando por el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.ejerciciosPath,require('../routes/ejercicio'))
    }

    middlewares(){
        this.app.use(express.static(__dirname+"/public"))
    }

    async conectarDB(){
        await dbConnection() // Esperarla respuesta del servidor
    }
}

module.exports = Server