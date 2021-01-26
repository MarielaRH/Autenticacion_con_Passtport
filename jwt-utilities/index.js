//requerimos la libreria de jwt
const jwt = require('jsonwebtoken');


/*
Nuestros argumentos los sacaremos de la terminal para lo cual haremos uso de process.arg
process.argv --> lee los comandos de la terminal 
process.argv nos devuelve un array de todos los argumentos ingresados por la consola, es por eso que lo está de-estructurando para obtener las variables importantes para este ejercicio.

*/
//los procesos que no estamos leyendo desde la terminal serán el proceso de node y el archivo que estamos leyenndo
//option --> estará definida por verificar o confirmar 
const [,,option,secret,nameOrToken] = process.argv;

//hacemos una validación para ver si los argumentos requeridos estan completos
if(!option || !secret || !nameOrToken){
    return console.log('Missing arguments');
}

//creamos una función para firmar el jwt
function  singToken (payload,secret){
    return jwt.sign(payload,secret);//retornará el token codificado
}

//creamos una funcion para crear el jwt
//token --> es el token codificado que nos generó sing
function verifyToken(token,secret){
    return jwt.verify(token,secret);//retornará el token verificado y decodificado
}

//creamos el flujo de ejecucion
if(option == 'sing'){
    console.log(singToken({sub: nameOrToken},secret));
}else if(option =='verify'){
    console.log(verifyToken(nameOrToken,secret));
}else{
    console.log('Option needs to be "sing" or "verify"');
}

