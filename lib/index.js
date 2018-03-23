'use strict'
const { send } = require('./sender')
class MailjetWrapper {
    constructor(apiKeyPublic = process.env.MAILJET_API_KEY_PUBLIC, apiKeyPrivate = process.env.MAILJET_API_KEY_PRIVATE) {
        this.options = {
            host: 'api.mailjet.com',
            port: '443',
            path: '/v3/send',
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`${apiKeyPublic}:${apiKeyPrivate}`).toString('base64')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    sendEmail(mail) {
        return send(this.options, JSON.stringify(mail.message()))
    }
}

module.exports = MailjetWrapper