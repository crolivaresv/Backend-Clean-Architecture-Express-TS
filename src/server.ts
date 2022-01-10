import * as express from 'express';
import { codes } from './types/respuestas';
import rootHandler from './Handlers/rootHandler';
import ordenesHandler from './Handlers/ordenesHandler';
import * as Packages from './Package';

const app = express();

app.set('json spaces', 2);

app.get('/', rootHandler(Packages)(codes).index);
app.get('/todos', ordenesHandler(Packages)(codes).todos);

app.listen(3000);
