"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.get = void 0;
// import { _getUsers, _createUser, _removeUser,_updateUser  } from '../repositorys/user-repository'
const bcrypt_1 = __importDefault(require("bcrypt"));
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  const users = await _getUsers();
        res.status(200).send({ results: `ROTA DOS USUÁRIOS` });
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // await userValidation.validate(req.body)
    try {
        const hashPass = yield bcrypt_1.default.hash(req.body.password, 8);
        req.body.password = hashPass;
        const { parents } = req.body;
        //  const user = await _createUser(req.body, parents)
        //     res.status(200).send(user)
    }
    catch (e) {
        res.status(400).send(`Problema ao criar usuário: ${e}`);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 8);
    const userUpdate = req.body;
    const newParents = req.body.parents;
    try {
        // const user = await _updateUser(userId, userUpdate, newParents)
        res.status(200).send(`O usuário foi alterado!`);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        //   _removeUser(userId)
        res.status(200).send(`O usuário de id: "${userId}" foi deletado!`);
    }
    catch (e) {
        res.status(400).send(`O usuário de id: "${userId}" não foi encontrado para ser removido!`);
    }
});
exports.remove = remove;
