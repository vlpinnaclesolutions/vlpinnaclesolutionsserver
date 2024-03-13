"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./1/routes"));
const routes_2 = __importDefault(require("./2/routes"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json({
        message: `SERVIDOR DOS CLIENTES 👋🌎`
    });
});
// ROTAS
router.use('/1', routes_1.default);
router.use('/2', routes_2.default);
//router.use('/alimentos', alimentos)
exports.default = router;
