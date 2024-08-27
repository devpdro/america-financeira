"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nedb_1 = require("nedb");
var db = new nedb_1.default({ filename: 'users.db', autoload: true });
exports.default = db;
