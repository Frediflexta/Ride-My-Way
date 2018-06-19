import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// this creats an instance of the app
const app = express();

// middleware to parse data i/o as json
app.use(logger('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Welcome home, Ride-My_Way');
});

export default app;
