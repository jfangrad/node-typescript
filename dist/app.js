"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config({ path: '.env.example' });
const app = express_1.default();
app.set('port', process.env.PORT || 8080);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true
}));
app.get('/', (req, res) => {
    res.send('Hello world');
});
exports.default = app;
//# sourceMappingURL=app.js.map