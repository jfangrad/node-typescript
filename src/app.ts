import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

dotenv.config({path: '.env.example'});

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  type: 'application/x-www-form-urlencoded',
  extended: true
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

export default app;
