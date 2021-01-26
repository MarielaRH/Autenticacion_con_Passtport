//requerimos express
const express = require('express');

//requerimos expresse-session que nos permite manejar el uso de sesiones
const session = require('express-session');

//definimos app
const app = express();

//definimos el manejo de la sesion por medio de app.use
//con session definimos la session y le pasamos las opciones
app.use(session({
    //le indicamos que no queremos que guarde la cookie cada vez que haya un cambio
    resave: false,
    //le indicamos que si la cookie no se ha inicializado no se guarde por defecto
    saveUninitialized: false,
    //se define un secret, el cual debe ser un string por lo menos de 256 bites
    //esto sirve para que cuando la cookie sea segura va a cifrarla haciendo uso de este secret
    secret: "keyboard cat",
}));

//definimos una ruta donde indicamos que el home vamos  hacer request y uso de nuestra session
//la manera en que definimos una ruta en express es por medio de app.get('ruta', callback)
app.get('/', (request,response) =>{
    request.session.count = request.session.count?  request.session.count +1 : 1;

    //respondemos
    response.status(200).json({
        hello: 'world',
        counter: request.session.count
    });
});

app.listen(3000,()=>{
    console.log('Listening http://localhost:3000');
})