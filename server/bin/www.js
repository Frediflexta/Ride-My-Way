import http from 'http';
import app from '../app';

// Get port from enviroment and store in express
const port = Number(process.env.PORT) || 3000;

app.set('port', port);

// Create http server
const server = http.createServer(app);

// listen on provided port on all network interfaces
server.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
