const QNeo4j = require('@qualitech/qneo4j');

const db = new QNeo4j({
  url: process.env.NEO_URL,
  username: process.env.NEO_USER,
  password: process.env.NEO_PASSWORD,
  notifyError: (error, query) => console.log(error, query),
});

const actorModule = require('./actor')(db);

module.exports = {
  actor() {
    return actorModule;
  },
};
