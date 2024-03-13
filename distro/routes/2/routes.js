"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produtos_1 = __importDefault(require("./produtos/produtos"));
const registros_1 = __importDefault(require("./registros/registros"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json({
        message: `SERVIDOR CLIENTE 2 👋🌎`
    });
});
// ROTAS
router.use('/produtos', produtos_1.default);
router.use('/registros', registros_1.default);
exports.default = router;
