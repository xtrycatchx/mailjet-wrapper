'use strict'

const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

class Mail {

    constructor(from, subject, message, recipient) {
        this.from = from
        this.subject = subject
        isHTML(message) ? this.html = message : this.plain = message
        this.recipients = []
        this.recipients.push({ Email: recipient })
    }

    addRecipient(Email) {
        this.recipients.push({ Email })
    }

    plainMessage(plainMessage) {
        return this.plain = plainMessage
    }

    htmlMessage(htmlMessage) {
        return this.html = htmlMessage
    }

    message() {
        return {
            FromEmail: this.from,
            FromName: this.from,
            Subject: this.subject,
            "Text-part": this.plain,
            "Html-part": this.html,
            Recipients: this.recipients
        }
    }
}

module.exports = Mail;