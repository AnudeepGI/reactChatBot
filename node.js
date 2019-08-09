var apiai = require('apiai');
var apiaiapp = apiai("9e4712cbd85f44d4893a5864e2c817c9");

const express = require('express')
const app = express()
var cors = require('cors');

const port = 8000

app.use(cors('http://localhost:3000/'));


app.get('/', (req, res) => {

    var request = apiaiapp.textRequest('hi', {
        sessionId: '2452342432'
    });

    request.on('response', function (response) {
        res.status(200).json(
            { data: response }
        );
    });

    request.on('error', function (error) {
        res.status(200).json(
            { data: error }
        );
    });

    request.end();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))