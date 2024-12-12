const { createServer } = require('node:http');

const hostname = '127.0.0.1'; // localhost || sử dụng địa chỉ IP: '127.0.0.1' or 'localhost'
const port = 3000;


// Tạo server website
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\nDev');
});


// Website chạy ở đâu 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
