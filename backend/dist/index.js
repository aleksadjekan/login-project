"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 8081;
const allowedOrigins = ['http://localhost:5173'];
const options = {
    origin: allowedOrigins
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(options));
app.get('/test', (req, res) => {
    res.send('Testing');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map