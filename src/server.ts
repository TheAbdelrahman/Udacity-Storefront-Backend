import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.route';
import productsRoute from './routes/products.route';
import ordersRoute from './routes/orders.route';


const app: express.Application = express();
const address: string = "0.0.0.0:3000";
app.use(bodyParser.json());


productsRoute(app);
usersRoute(app);
ordersRoute(app);

app.listen(3000,  ()=> {
    console.log(`starting app on: ${address}`)
});

export default app;