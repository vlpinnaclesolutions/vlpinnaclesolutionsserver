"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_controller_1 = require("../../controllers/user.controller");
const router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.get("/", user_controller_1.get);
// router.put("/:id", verifyToken, update)
// router.delete("/:id", verifyToken, remove)
exports.default = router;
