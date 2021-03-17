const http = require("http");

http
  .createServer((req, res) => {
    console.log("Hola");

    res.writeHead(200, { "Content-Type": "application/json" });

    const user = {
      id: 123,
      user: "Matias",
    };
    res.write(JSON.stringify(user));

    // res.setHeader("Content-Disposition", "attachment; filename=usuarios.csv");
    // res.write("id, name\n");
    // res.write("123, Matt\n");
    // res.write("456, Marta");

    res.end();
  })
  .listen(3000);
