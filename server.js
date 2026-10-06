const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.disable('x-powered-by');

// Basic security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Static files; /privacy and /terms also work without .html
app.use(express.static(PUBLIC_DIR, { extensions: ['html'], maxAge: '1h' }));

// Health check for Railway
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Anything else -> home page
app.use((req, res) => res.status(404).sendFile(path.join(PUBLIC_DIR, 'index.html')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Euro Gulf site running on port ${PORT}`);
});
