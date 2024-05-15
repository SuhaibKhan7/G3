const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();

//middlware
server.use(cors())
server.use(bodyParser);
server.get('/data', (req, res) => {
    res.send({ username: 'dileep' });

})
server.post('/data', (req, res) => {
    console.log(req.body)
    res.send({ msg: 'data received' });
})




server.listen(4003, () => {
    console.log('server started');
})