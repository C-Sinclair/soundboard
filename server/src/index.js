import fastify from "fastify";
import ws from "fastify-websocket";

const server = fastify();

server.register(ws);

const clients = [];

server.get("/", { websocket: true }, (connection, req) => {
  console.log(`socket connected`);
  clients.push(connection);
  console.info(`${clients.length} clients connected`);

  connection.socket.on("message", (msg) => {
    console.log(`message received`, msg);
    clients.forEach((client) => {
      client.socket.send(msg);
    });
  });

  connection.socket.on("close", () => {
    console.log(`socket disconnected`);
    const index = clients.indexOf(connection);
    if (index > -1) {
      clients.splice(index, 1);
    }
  });
});

server.ready((err) => {
  if (err) throw err;

  console.log("Server ready!");
});

server.listen(5000);
