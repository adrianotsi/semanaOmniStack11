const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    // return response.send('Hello World, how you doing?');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Adriano Vieira'
    })
})

app.listen(3333);