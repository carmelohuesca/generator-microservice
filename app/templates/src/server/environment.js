require('dotenv').config();
const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_DB: process.env.MONGO_DB || '<%=dbname%>',
  PORT: process.env.PORT || 5000,
  SOCKET_PORT: process.env.SOCKET_PORT || 5001,
  API: process.env.API || 'http://localhost'
};
module.exports = ENV;
