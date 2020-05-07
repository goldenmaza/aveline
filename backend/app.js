import Express from 'express';
import Helmet from 'helmet';
import Compression from 'compression';
import Parser from 'body-parser';
import Cors from 'cors';

import Graphql from 'express-graphql';
import Nodemailer from 'nodemailer';
//import dotenv from 'dotenv';

import Schema from './aveline/schema';

const app = Express();

// Default configurations...
//dotenv.config();

app.use(Helmet());
app.use(Compression());
app.use(Parser.json());
app.use(Parser.urlencoded({ extended: true }));
app.use(Cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// GraphQL API configuration...
app.use('/api', Graphql({
    schema: Schema,
    pretty: true,
    graphiql: false
}));

// Nodemailer configuration...
const protocol = {
    host: 'ns8.inleed.net',
    port: 587,
    auth: {
        user: 'test@hellstrand.org',
        pass: 'testaccount'
    }
}

const transporter = Nodemailer.createTransport(protocol);

transporter.verify((err, suc) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Nodemailer\'s transporter has been verified...');
    }
});

app.use('/mail', (req, res, next) => {
    const sender = req.body.forename + " " + req.body.surname;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const purpose = req.body.purpose;
    const message = req.body.message;
    const body = `Sender: ${sender}\nAddress: ${address}\nPhone: ${phone}\nE-mail: ${email}\n\nPurpose: ${purpose}\nMessage: ${message} `;

    const mail = {
        from: `${sender} <${email}>`,
        to: protocol.auth.user,
        subject: purpose,
        text: body
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'Nodemailer\'s transporter failed...'
            });
        } else {
            res.json({
                msg: 'Nodemailer\'s transporter was successful...'
            });
        }
    });
});

const PORT = 6969; // refactor: load from process.env.PORT
app.listen(PORT, () => {
    console.log('Application is listening at port: ', PORT);
});
