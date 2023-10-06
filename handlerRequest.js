const url = require("url");
const dataUser = require("./dataUser.js");

const handlerRequest = (req, res) => {
    // Kode untuk menangani permintaan dan memberikan respons
    if (req.method === "GET") {
        //mengekstrak url dari request
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;

        // Menghandle request berdasarkan path request
        if (pathname === "/") {
            //menentukan tipe response body
            res.setHeader("Content-Type", "html");

            //memberikan status code pada response
            res.writeHead(200);

            //memberikan data pada response body dan mengakhiri response
            res.end("<h1>Halo<h1>\n");
        } else if (pathname === "/users") {
            // users = [
            //     dataUser.User1,
            //     dataUser.User2,
            //     dataUser.User3,
            //     dataUser.User4,
            // ];
            users = Object.values(dataUser);

            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify(users));
        } else {
            res.setHeader("Content-Type", "application/json");
            res.writeHead(404);
            res.end(
                JSON.stringify({
                    status: "Not Found!!!",
                    message: "Resource Not Found",
                })
            );
        }
    } else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(405);
        res.end(
            JSON.stringify({
                status: "Tidak diizinkan",
                message: "Metode HTTP Tidak Diizinkan",
            })
        );
    }
};

module.exports = { handlerRequest };
