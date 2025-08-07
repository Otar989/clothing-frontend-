const http = require('http');
const url = require('url');

const products = [
  { id: 1, name: 'Sneakers', price: 80 },
  { id: 2, name: 'Boots', price: 120 },
  { id: 3, name: 'Sandals', price: 45 }
];

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'GET' && pathname === '/products') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
  } else if (req.method === 'GET' && pathname === '/health') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
