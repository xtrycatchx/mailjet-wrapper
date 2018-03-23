'use strict'
const https = require('https')

exports.send = (options, body) => new Promise((resolve, reject) => {
    const req = https.request(options, res => {
        let body = [];
        res.on('data', chunk => {
            body.push(chunk)
        })
        res.on('end', () => {
            resolve(body.join(''))
        })
    })
    req.write(body)
    req.end()
    req.on('error', e => {
        reject(e)
    })
})