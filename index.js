const notesHandler = require('./handler');
const routes = require('./route');
module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service }) => {
        const notesHandlerInstance = new notesHandler(service);
        server.route(routes(notesHandlerInstance));
    },
}