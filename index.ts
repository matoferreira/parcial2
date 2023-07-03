import express from "express";

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Esta funcionando el get');
});

app.listen(port, () => console.log(`App is working, hit it through port ${port}`));