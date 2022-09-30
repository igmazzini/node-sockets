const socketController = ( client ) => {
    
    console.log('Client connected');


    client.on('disconnect',() =>{
        console.log('Client disconnect');
    });

    client.on('on-client-message',( payload, callBack ) =>{
        
        //this.io.emit('on-server-message', payload);
        client.broadcast.emit('on-server-message', payload);
        callBack('callBack');
    });

  }

module.exports = {
    socketController
}