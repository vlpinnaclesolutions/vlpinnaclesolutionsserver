"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users/users"));
const alimentos_1 = __importDefault(require("./alimentos/alimentos"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json({
        message: `SERVIDOR REI DAS FEIRAS NO AR 👋🌎`
    });
});
// ROTAS
router.use('/users', users_1.default);
router.use('/alimentos', alimentos_1.default);
exports.default = router;
