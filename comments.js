// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    {
        name: 'John',
        message: 'Hello'
    },
    {
        name: 'Mary',
        message: 'Hi, John'
    }
];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/api/comments', (req, res) => {
    res.send(comments);
});
app.post('/api/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
