const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'dbvendex'
});

db.connect();

app.post('/compras', (req, res) => {
    const { data_compra, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento } = req.body;
    const sql = 'INSERT INTO compras (data_compra, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [data_compra, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento], (err, result) => {
        if (err) throw err;
        res.send('Compra realizada com sucesso');
    });
});

app.post('/parceiro', (req, res) => {
    const { tipo, cpf_cnpj, telefone, cep, cidade, estado, rua, numero, complemento } = req.body;
    const sql = 'INSERT INTO parceiro (tipo, cpf_cnpj, telefone, cep, cidade, estado, rua, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [tipo, cpf_cnpj, telefone, cep, cidade, estado, rua, numero, complemento], (err, result) => {
        if (err) throw err;
        res.send('Parceiro cadastrado com sucesso');
    });
});

app.post('/produto', (req, res) => {
    const { id, nome, validade, codigo_barras, quantidade, categoria, tipo } = req.body;
    
    console.log('Dados recebidos no endpoint /produto:', req.body);
    console.log('Tipo:', tipo);
    console.log('Dados extraídos:', { id, nome, validade, codigo_barras, quantidade, categoria, tipo });
    
    if (tipo === 'servico') {
        console.log('Cadastrando serviço...');
        const sql = 'INSERT INTO servico (id, nome, categoria) VALUES (?, ?, ?)';
        console.log('SQL para serviço:', sql);
        console.log('Parâmetros para serviço:', [id, nome, categoria]);
        
        db.query(sql, [id, nome, categoria], (err, result) => {
            if (err) {
                console.error('Erro ao cadastrar serviço:', err);
                res.status(500).json({ success: false, message: 'Erro ao cadastrar serviço: ' + err.message });
                return;
            }
            console.log('Serviço cadastrado com sucesso:', result);
            res.send('Serviço cadastrado com sucesso');
        });
    } else {
        console.log('Cadastrando produto...');
        const sql = 'INSERT INTO produto (id, nome, validade, codigo_barras, quantidade) VALUES (?, ?, ?, ?, ?)';
        console.log('SQL para produto:', sql);
        console.log('Parâmetros para produto:', [id, nome, validade, codigo_barras, quantidade]);
        
        db.query(sql, [id, nome, validade, codigo_barras, quantidade], (err, result) => {
            if (err) {
                console.error('Erro ao cadastrar produto:', err);
                res.status(500).json({ success: false, message: 'Erro ao cadastrar produto: ' + err.message });
                return;
            }
            console.log('Produto cadastrado com sucesso:', result);
            res.send('Produto cadastrado com sucesso');
        });
    }
});

app.post('/usuario', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) throw err;
        res.send('Usuário cadastrado com sucesso');
    });
});

app.post('/vendas', (req, res) => {
    const { data_venda, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento } = req.body;
    const sql = 'INSERT INTO vendas (data_venda, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [data_venda, nome_produto, quantidade, valor_total, forma_pagamento, prazo_pagamento], (err, result) => {
        if (err) throw err;
        res.send('Venda realizada com sucesso');
    });
});