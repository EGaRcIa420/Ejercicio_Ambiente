// Importar paquetes requeridos de Node
const {response}= require('express')

// Importacion de los modelos
const Ejercicio = require('../models/ejercicio')

const ejercicioGet = async(req, res = response)=>{
    const {NombreUsuario}=req.query // Desestructuracion

    const ejercicios = await Ejercicio.find()

    res.json({
        ejercicios
    })
}

// registrar
const ejercicioPost = async(req, res = response)=>{
    const body = req.query // Captura de atributos
    const ejercicio = new Ejercicio(body) // instanciar el objeto
    ejercicio.save()
    res.json({
        msg:'La insercion se efectuo exitosamente'
    })
}

module.exports= {
    ejercicioGet,
    ejercicioPost
}

