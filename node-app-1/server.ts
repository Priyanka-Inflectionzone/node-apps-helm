import express from 'express';
const request = require('request');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost" ;
const APP2 = process.env.APP_2|| "localhost:3002"; 


app.get('/', (req, res) => {
    return res.send('Its App-1');
})

app.get('/call-app-2', (req,res) => {
var options ={ method: 'GET', 
url: `http://${APP2}`,
headers: 
{'cache-control' : 'no-cache'} };

request(options, function(error: { message: any; }, response: any, body: any){
    if(error) {
        return res.send(error.message);
    }
    return res.send(body);
});
   
});


app.listen(PORT, () => {
    console.log(`The application is listening on port: '${PORT}'`);
})
    