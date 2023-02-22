import express from 'express';

const app = express();

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost" ;



app.get('/', (req, res) => {
    return res.send('Its App-2');
})


app.listen(PORT, () => {
    console.log(`The application is listening on port: '${PORT}'`);
})