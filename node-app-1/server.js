"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request = require('request');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const APP2 = process.env.APP_2 || "localhost:3002";
app.get('/', (req, res) => {
    return res.send('Its App-1');
});
app.get('/call-app-2', (req, res) => {
    var options = { method: 'GET',
        url: `http://${APP2}`,
        headers: { 'cache-control': 'no-cache' } };
    request(options, function (error, response, body) {
        if (error) {
            return res.send(error.message);
        }
        return res.send(body);
    });
});
app.listen(PORT, () => {
    console.log(`The application is listening on port: '${PORT}'`);
});
