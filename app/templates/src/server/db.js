const Log = require('./log');
const log = new Log();
const mongoose = require('mongoose');
const ENV = require('./environment');
mongoose.connect(ENV.MONGO_DB, {
    useMongoClient: true
});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    require('../routes/<%=name%>/<%=name%>.model');
    log.log('————————————————————————————————————————————————————————————————');
    log.setColor('YELLOW').log('database <%dbname%> connection success!').reset();
    log.log('————————————————————————————————————————————————————————————————');
});
module.exports = db;