'use strict';

const express = require('express');
const {readFile} = require('fs').promises;
const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('index.html', 'utf-8'));
});

app.listen(process.env.PORT || 3500, () => console.log('App is available on http://localhost:3500'));