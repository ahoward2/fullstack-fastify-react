// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-cors"), {
  // put your options here
});
// Declare a route
fastify.get("/hello", async (request, reply) => {
  return { message: "hello world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
