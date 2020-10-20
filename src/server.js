require('dotenv').config();

const server = require('./routes');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('%s server listen at %s', server.name, server.url);
});
