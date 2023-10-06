const http = require("http");
const { handlerRequest } = require("./handlerRequest");

const server = http.createServer((req, res) => {
    handlerRequest(req, res);
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
