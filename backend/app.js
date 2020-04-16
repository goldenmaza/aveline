const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());

app.listen(6969);

app.get('/', (req, res, next) => {
    res.send("Aveline under development...");
});
