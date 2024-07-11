# Dockerized HarperDB Template

This template takes the official HarperDB [application-template](https://github.com/HarperDB/application-template), slightly updates the code to be in sync with the HarperDB Docs, and dockerizes the project.

- Clone the repo: `git clone repoURL`
- Run the project with docker-compose: `docker compose up`
- Test out some example endpoints.

  - Try some of the request examples shown in the `RequestExamples.http` file. (Note: The file uses [the VS Code "REST Client" Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). It's basically a simplified, file-based http request tool with functionality similar to Postman, for testing endpoints.)
  - Or alternatively, use that file as a reference for setting up some Postman request routes.

- To make requests to HarperDB endpoints, you will need to use a an "Authorization: Basic" header, with your base64 encoded username:password (using the username & password you set in the environment section of the docker-compose file). In our case, that would be:
  - `Authorization: Basic SERCX0FETUlOOnBhc3N3b3Jk`
  - Which represnts: `Authorization: Basic <base64 encoded username:password>`
  - For more info on base64 encoding check out this [MDN Example](https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa#examples). Here's an example of how to obtain that via basic browser javascript:
