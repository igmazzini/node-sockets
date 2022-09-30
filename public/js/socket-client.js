const client =  io();


const lblOnline = document.querySelector('#lbl-online');
const lblOffline = document.querySelector('#lbl-offline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');





client.on('connect', () => {
    
    console.log('Connected');
    lblOnline.style.display = 'inline-block';
    lblOffline.style.display = 'none';
    
});

client.on('disconnect', () => {
    
    console.log('Disconnected');
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'inline-block';

});

client.on('on-server-message', ( payload) => {
    
    console.log('Server message',payload);
   
});


btnSend.addEventListener('click', () =>{    

    const payload = {
        msg:txtMessage.value
    }

    client.emit('on-client-message', payload, ( id ) =>{
        console.log(id);
    });
});