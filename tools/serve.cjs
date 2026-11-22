// Runs Pagecraft on this computer only: http://localhost:4321/
// No downloads, no dependencies. Serves the files in the project folder and nothing else.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.PORT) || 4321;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Bad address'); }
  if (urlPath === '/') { res.writeHead(302, { Location: '/resume.html' }); return res.end(); }

  const file = path.resolve(ROOT, '.' + urlPath);
  const inside = file === ROOT || file.startsWith(ROOT + path.sep);
  const hidden = path.relative(ROOT, file).split(path.sep).some(part => part.startsWith('.'));
  if (!inside || hidden) { res.writeHead(404); return res.end('Not found'); }

  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') console.log(`\n  Pagecraft is already running at http://localhost:${PORT}/\n`);
  else console.error(err);
  process.exit(1);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Pagecraft is running at  http://localhost:${PORT}/\n`);
  console.log('  Keep this window open while you use it. Close it to stop Pagecraft.\n');
});
