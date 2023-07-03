import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import Routes from "./routes";

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

Routes(app)

app.listen(port, () => {
    console.log(`App is working manin, hit it through port ${port}`);
});