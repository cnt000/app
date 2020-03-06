const path = require('path');
const fastify = require('fastify')({ logger: true });

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '..', '..', 'build')
});

fastify.get('/', function(req, reply) {
  reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
