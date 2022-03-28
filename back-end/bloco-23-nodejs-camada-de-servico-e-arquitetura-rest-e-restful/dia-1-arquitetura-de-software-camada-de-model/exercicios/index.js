const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.post('/user', (req, res) => {
const { firstName, lastName } = req.body;

const user = 'OI';

res.status(200).json(user);
});

const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });

