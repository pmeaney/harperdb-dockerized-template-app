const routesIndex = async (server, { hdbCore, logger }) => {
  server.route({
    url: "/getAll",
    method: "GET",
    handler: async (request) => {
      request.body = {
        operation: "sql",
        sql: "SELECT * FROM data.Dog",
      };
      return hdbCore.requestWithoutAuthentication(request);
    },
  });

  server.route({
    url: "/getAnotherRoute",
    method: "GET",
    handler: async (request, reply) => {
      return reply.send("hello from /getAnotherRoute");
    },
  });
};
export default routesIndex;
