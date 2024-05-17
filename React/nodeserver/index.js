const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://singup:CZf3MVlocbpKiELS@cluster67376.kmci2em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster67376');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String

});

const User = mongoose.model('Userdata', userSchema);






const server = express();
server.use(cors())
server.use(express.json())




server.get('/data', (req, res) => {
    res.send('hi');
})
server.post('/data', (req, res) => {

    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password
    user.save();
    console.log(req.body.username)
    res.send({ msg: "Data rec" })
})

server.post('/login', async (req, res) => {
    const loginname = req.body.username;
    console.log(loginname);
    server.post('/login', async (req, res) => {
        const loginname = req.body.username;
        console.log(loginname);

        try {
            const validuser = await User.findOne({ username: loginname });
            console.log(validuser);

            if (validuser) {
                res.json({ msg: 'loginsuccessful' });
            } else {
                res.json({ msg: 'login unsuccessful' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Internal server error' });
        }
    });
    try {
        const validuser = await User.findOne({ username: loginname });
        console.log(validuser);

        if (validuser) {
            res.json({ msg: 'loginsuccessful' });
        } else {
            res.json({ msg: 'login unsuccessful' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});







server.listen(5000, () => {
    console.log('server started');
})
