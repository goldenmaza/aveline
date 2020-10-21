import Nodemailer from 'nodemailer';
import global from '../app';

let mailerData = {
    mode: '',
    body: ''
}

// Protocol configuration...
const protocol = {
    host: process.env.PROTOCOL_HOST,
    port: process.env.PROTOCOL_PORT,
    auth: {
        user: process.env.PROTOCOL_USER,
        pass: process.env.PROTOCOL_PASS
    }
}
const transporter = Nodemailer.createTransport(protocol);

// Verify transporter (SMTP) connection...
transporter.verify((err, suc) => {
    if (err) {
        mailerData.mode = 'ERROR';
        mailerData.body = 'Nodemailer\'s transporter failed: ' + err;
        global.mailerLogger.log(mailerData);
    } else {
        mailerData.mode = process.env.SERVER_MODE;
        mailerData.body = 'Nodemailer\'s transporter has been verified...';
        global.mailerLogger.log(mailerData);
    }
});

// Nodemailer API configuration...
global.app.use('/mail', (req, res, next) => {
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
                msg: data.body
            });
            mailerData.mode = 'ERROR';
            mailerData.body = 'Transporter\'s sendMail failed: ' + err;
            global.mailerLogger.log(data);
        } else {
            res.json({
                msg: data.body
            });
            mailerData.mode = process.env.SERVER_MODE;
            mailerData.body = 'Transporter\'s sendMail was successful...';
            global.mailerLogger.log(data);
        }
    });
});

mailerData.mode = process.env.SERVER_MODE;
mailerData.body = 'Nodemailer API up and running...';
global.mailerLogger.log(mailerData);
