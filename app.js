'use strict';

const Hapi = require('hapi');
const routes = require('./routes/routes');

// Init Server
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

// routes
server.route(routes.routes);

// Method to Start Server
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

// On Failure
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// Method call to Start Server
try {
    init();
} 
catch (err) {
    console.log(err)
}
  