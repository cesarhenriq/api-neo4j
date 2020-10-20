const restfy = require('restify');

const Middleware = require('../app/middleware');
const ActorController = require('../app/controllers/ActorController');

const server = restfy.createServer();

server.use(restfy.plugins.fullResponse());
server.use(restfy.plugins.bodyParser());

/**Actors */
server.get('/actors', ActorController.index);
server.get('/actors/:id', ActorController.show);
server.post('/actors', ActorController.create);
server.put('/actors/:id', ActorController.update);
server.del('/actors/:id', ActorController.delete);

module.exports = server;
