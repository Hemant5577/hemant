const express = require('express');
const app=express();
app.get('/',(request,response)=>{
    response.send('Get method');
})
app.listen(3000,'0.0.0.0',()=> {
    console.log('Server Started on port 3000');
})