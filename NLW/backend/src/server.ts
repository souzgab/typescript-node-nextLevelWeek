import express from 'express';
import routes from './routes';
const app: any = express();

app.use(routes);

app.listen(3333, () => {console.log("Server Online")});