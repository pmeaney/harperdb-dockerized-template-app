# Dockerized HarperDB Template

This is a dockerized template of the the official HarperDB [application-template](https://github.com/HarperDB/application-template).

### Start it up 🚀

- Clone the repo: `git clone git@github.com:pmeaney/harperdb-dockerized-template-app.git`
- Run the project with docker-compose: `docker compose up`
- Test out some example endpoints.

  - Try some of the request examples shown in the `RequestExamples.http` file. (Note: The file uses [the VS Code "REST Client" Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). It's basically a simplified, file-based http request tool with functionality similar to Postman, for testing endpoints.)
  - Or, if you prefer to use `curl` in your CLI, check out the `RequestExamples-curl.md` for curl examples.

### Making Http requests to HarperDB Endpoints

#### Include a Basic authorization header

- To make requests to HarperDB endpoints, you will need to use a an "Authorization: Basic" header, with your base64 encoded username:password (using the username & password you set in the environment section of the docker-compose file). In our case, that would be:
  - `Authorization: Basic SERCX0FETUlOOnBhc3N3b3Jk`
  - Which represnts: `Authorization: Basic <base64 encoded username:password>`
  - For more info on base64 encoding check out this [MDN Example](https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa#examples).

#### Routes are available at "app-name/routeEndpoint"

- As you can see in the `application-template/config.yaml` file, on line 13, endpoints are "relative to the app-name, like `http://server/app-name/route-name`".
- The app-name in our case is the directory name: "application-template". And the example GET endpoint shown in routes.js is "getAll". So, our http request would look like this:

```
GET http://localhost:9926/application-template/getAll
Content-Type: application/json
Authorization: Basic SERCX0FETUlOOnBhc3N3b3Jk
```

### Overview of setting up this project:

- Convert the `docker run` command shown at the [HarperDB DockerHub page](https://hub.docker.com/r/harperdb/harperdb) into a docker-compose.yml file
- Clone the HarperDB application-template such that the entire directory of "application-template" sits in the `hdb/components` via a Docker bind mount or volume, which will need to be definedin the docker-compose.yml.
- Add in snippets from the docs and make any small edits as necessary
- Set up some basic http requests which include an auth basic base64 header
