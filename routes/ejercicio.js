const {Routes, Router} = require('express')

const route = Router()

//Importar metodos de navegador
const {ejercicioGet, ejercicioPost} =require('../controllers/ejercicio')

route.get('/', ejercicioGet)

route.post('/', ejercicioPost)

route.get ('/',(req,res)=> {
    res.json({
        msg:'API EJERCICIO GET'
    })
})

route.post ('/', (req,res)=> {
    res.json({
        msg:'API EJERCICIO POST'
    })
})

route.put ('/', (req,res)=> {
    res.json({
        msg:'API EJERCICIO PUT'
    })
})

route.delete ('/', (req,res)=> {
    res.json({
        msg:'API EJERCICIO DELETE'
    })
})

module.exports = route
