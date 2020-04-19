import Express from 'express';
import Graphql from 'express-graphql';
import Parser from 'body-parser';
import cors from 'cors';
import Schema from './aveline/schema';

const PORT = 6969; // refactor: load from env

const app = Express();

app.use(cors());
app.use(Parser.json());
app.use(Parser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use('/api', Graphql({
    schema: Schema,
    pretty: true,
    graphiql: false
}));

app.listen(PORT, () => {
    console.log("Application is listening at port: " + PORT);
});
