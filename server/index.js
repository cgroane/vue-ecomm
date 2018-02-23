const express = require('express');
const port = 3001;

const app = express();
const testCtrl = require('./controllers/testController');

app.get('/api/people', testCtrl.getPeople);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})