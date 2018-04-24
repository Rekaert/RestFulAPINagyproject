const host = 'localhost'
const port = 27017
const user = 'messageServ'
const password = 'mess'
const database = 'messageService'


module.exports = {
    uri: `mongodb://${user}:${password}@${host}:${port}/${database}`,
    options: {
        connectTimeoutMS: 2000,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500
    }
}