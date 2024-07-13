import { fnExampleCJS } from "../libExamples/cjsexample.cjs";

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
      fnExampleCJS();
      return reply.send(
        "hello from /getAnotherRoute. Check the terminal for example console log statements from functions we have imported."
      );
    },
  });
};
export default routesIndex;
