const express = require('express')
const app = express()
const prot = 8080

//metodo use contenido estatico en la carpeta public 
app.use(express.static('public'))

app.get('/hola-mundo',(req, res)=>{
    res.send('Hola mundo en su repsectiva ruta ')
})


/* Despliege este archivo si hay un error  */
app.get('*',(req, res)=>{
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(prot,()=>{
    console.log(`Example app listen att http://localhost${prot}`);
})
//app.listen(8080)