"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//ROTA PARA REI DAS FEIRAS
app.use('/1', routes_1.default);
app.get('/', (req, res) => {
    res.json({
        message: "👋🌎 Bem vindo, Innacle Solutions no ar! 👋🌎"
    });
});
exports.default = app;
