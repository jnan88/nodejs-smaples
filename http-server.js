const http = require('http');
const server = http.createServer((req, res) => {
  const ip = req.headers['x-real-ip'];
  const port = req.socket.remotePort;
  res.end(`Your IP address is ${ip} and your source port is ${port}.`);
}).listen(3200);
