"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./src/lib/db");
db_1.default.insert([
    {
        name: 'Victor Hugo Pedro',
        email: 'victorh.pedr@gmail.com',
        password: 'Ame!@#10',
    },
    {
        name: 'Victor',
        email: 'victorlolzinho08@gmail.com',
        password: '123456',
    },
], function (err, newDocs) {
    if (err) {
        console.error('Erro ao inserir usuários:', err);
    }
    else {
        console.log('Usuários inseridos com sucesso:', newDocs);
    }
});
