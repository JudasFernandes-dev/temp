const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Substitua por seu arquivo JSON
const middlewares = jsonServer.defaults();

server.use(cors()); // Ativa o CORS
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server está rodando em http://localhost:3000");
});
