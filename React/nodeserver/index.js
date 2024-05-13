const express = require('express')
const server = express();

server.get('/signup', (req, res) => {
    console.log('....');
    res.send('hey');
})

server.listen(4003, () => {
    console.log('server started');
})