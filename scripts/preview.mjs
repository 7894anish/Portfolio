import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8", ".pdf": "application/pdf", ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2" };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403); response.end(); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    const data = await readFile(file);
    response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    try { response.end(request.method === "HEAD" ? undefined : await readFile(path.join(root, "404.html"))); }
    catch { response.end("Not found. Build the portfolio with npm run build first."); }
  }
}).listen(port, "127.0.0.1", () => console.log(`Portfolio preview: http://localhost:${port}`));
