const express = require('express')
const cors = require('cors');

const server = express();

//middlware
server.use(cors())
server.use(express.json())

server.get('/data', (req, res) => {
    res.send({ username: 'dileep'});

})
server.post('/data', (req, res) => {
    console.log(req.body.username)
    res.send({ msg: 'data received',data:req.body});
})


server.listen(4003, () => {
    console.log('server started');
})