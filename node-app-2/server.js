"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost";
app.get('/', (req, res) => {
    return res.send('Its App-2');
});
app.listen(PORT, () => {
    console.log(`The application is listening on port: '${PORT}'`);
});
