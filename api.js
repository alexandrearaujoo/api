const axios = require("axios")

const api = axios.create({
    baseURL: 'http://api.aviationstack.com/v1/'
})

module.exports = api