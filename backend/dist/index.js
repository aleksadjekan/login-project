"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const allowedOrigins = ['https://localhost:5173'];
const options = {
    origin: allowedOrigins
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(options));
https_1.default
    .createServer(app)
    .listen(8081, () => {
    console.log(`server running : https://localhost:8081`);
});
app.get('/test', (req, res) => {
    console.log('hit test');
    res.send("What's up doc ?!");
});
//# sourceMappingURL=index.js.map