const myModule = require('./my-module');
const { readFile } = require('fs').promises;
const express = require('express');
const app = express();

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))