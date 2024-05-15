const express = require('express')
const cors = require('cors');
const server = express();

//middlware
server.use(cors())

server.get('/data', (req, res) => {
    res.send({ username: 'dileep' });

})
server.post('/data', (req, res) => {

    req.send({msg:'data received'});
})




server.listen(4003, () => {
    console.log('server started');
})