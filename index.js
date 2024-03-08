//'use strict';
/*const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('ಠ_ಠ    ^_^ (╯°□°）╯︵ ┻━┻');
});
server.listen(5000);*/


const express = require('express')
const app = express()
const port = 3000

app.get ('/', (req , res) => {
    res.send( ' ¡Hola Mundo 😊 🌹(*/ω＼*) ! 💀')
})

app.listen (port, () => {
    console.log(' La aplicacion se esta ejecutando por el puerto' + port)

})