const express = require('express')

const server = express();

const handleAllTypesOfRequests = (req, res) => {
    res.send('response from server.get');
}
const handleSignupRequests = (req, res) => {
    res.send('response from server.put')
}
const handleHomeRequests = (req, res) => {
    res.send('response from server.delete')
}
server.get('/profile', handleAllTypesOfRequests);
server.post('/login', (req, res) => res.send('login page available'));
server.put('/signup', handleSignupRequests);
server.delete('/home', handleHomeRequests);

server.listen(3000,()=> console.log('server is ready'));