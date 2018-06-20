import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import router from './routes/offersRoute';

// this creats an instance of the app
const app = express();

// middleware to parse data i/o as json
app.use(logger('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).send('Welcome home, Ride-My-Way');
});

export default app;
