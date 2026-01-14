import express from 'express';
import lawyerRouter from './routes/lawyer.route.js'
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use('/api/lawyer', lawyerRouter);

// In development, proxy to Vite dev server on port 5173
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  
  // Try to proxy to Vite dev server
  const viteUrl = `http://localhost:5173${req.path}`;
  fetch(viteUrl, {
    method: req.method,
    headers: {
      ...req.headers,
      host: 'localhost:5173',
    },
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
  })
    .then(response => {
      res.writeHead(response.status, response.headers);
      return response.body.pipe(res);
    })
    .catch(() => {
      // Fallback to serving built files or index.html
      const indexPath = path.join(__dirname, 'client', 'dist', 'index.html');
      res.sendFile(indexPath, (err) => {
        if (err) {
          res.status(404).send('Not found. Make sure to run: npm run dev');
        }
      });
    });
});

// Fallback for API and static files
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Port: 3000...');
  console.log('Make sure Vite dev server is running on http://localhost:5173');
})
