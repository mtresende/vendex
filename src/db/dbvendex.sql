USE dbvendex;

CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    prazo_pagamento VARCHAR(50) NOT NULL
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    prazo_pagamento VARCHAR(50) NOT NULL
);

CREATE TABLE produto (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    validade DATE,
    codigo_barras VARCHAR(50),
    quantidade INT
);

CREATE TABLE servico (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100)
);

CREATE TABLE parceiro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('cliente', 'fornecedor') NOT NULL,
    cpf_cnpj VARCHAR(20) NOT NULL,
    telefone VARCHAR(20),
    cep VARCHAR(10),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(100)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);