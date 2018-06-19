import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/example';

// this creats an instance of the app
const app = express();

// middleware to parse data i/o as json
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(router);

export default app;
