export const DEFAULT_POST_OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    }
};

export const DEFAULT_NODEMAILER_OPTIONS = {
    url: process.env.REACT_APP_SERVER_MAIL_ADDRESS,
    method: 'POST'
};
