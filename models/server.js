
const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');




class Server {

    constructor(){

       this.port = process.env.PORT;

       this.app = express();

       this.socketServer = require('http').createServer( this.app );

       this.io = require('socket.io')( this.socketServer );

       //Routes path 
       this.paths = {
           
       }
      
       
       //Middlewares
       this.middlewares(); 

       //Rutas
       this.routes();     
        
       //Sockets
       this.sockets();
    }


    middlewares() {

        //CORS
        this.app.use( cors() );

        //Parse body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
        
        
    }


    routes(){

      
    }

    sockets() {
        this.io.on('connection', socketController);
    }
   

    init(){

        this.socketServer.listen(this.port, () =>{
            console.log(`Server in port ${this.port}`);
        });
        
    }

   

}

module.exports = Server;