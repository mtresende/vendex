## 4. Projeto da Solução

A solução proposta consiste no desenvolvimento de um sistema ERP simples, porém eficiente, voltado para pequenos e médios comerciantes e prestadores de serviços, com foco na integração dos setores financeiro, comercial e de cadastro. O sistema permitirá o controle de contas a pagar e a receber, fluxo de caixa, orçamento e relatórios personalizados, proporcionando uma visão clara e organizada da saúde financeira da empresa. Com interface responsiva, compatibilidade entre sistemas operacionais e conformidade com normas de proteção de dados, o sistema busca otimizar a tomada de decisões e reduzir falhas operacionais, respeitando as restrições técnicas e de prazo estabelecidas no projeto.

## 4.1. Arquitetura da solução

A arquitetura do sistema será baseada em uma estrutura **cliente-servidor simples**, dividida em três camadas principais:

**Apresentação (Front-end)**: Desenvolvida com **HTML, CSS e Bootstrap**, essa camada será responsável pela interface gráfica do usuário (UI), permitindo a navegação entre funcionalidades como cadastro, vendas, compras e relatórios financeiros de forma responsiva e intuitiva.

**Lógica de Aplicação (Back-end)**: Utilizaremos **JavaScript (Node.js)** para implementar a lógica do sistema, incluindo o processamento de dados, validações, controle de fluxo de caixa e regras de negócio. A comunicação entre front-end e back-end será feita via **requisições HTTP (REST)**.

**Persistência (Banco de Dados)**: O **MySQL** será utilizado para armazenar dados estruturados, como informações de clientes, fornecedores, produtos, vendas, compras e registros financeiros. A modelagem será normalizada para garantir integridade e performance.

Essa arquitetura visa simplicidade, clareza e modularidade, respeitando as restrições do projeto, com foco na integração dos módulos e no suporte às necessidades de comerciantes e prestadores de serviços.

## 4.2. Protótipos de telas

**Tela de Login:** Acessa o sistema mediante validação de usuário

**HomePage:** Permite a navegação entre as telas do sistema

**Cadastro de Produtos:** Armazena informações essenciais dos produtos, como código, nome, preço e quantidade em estoque.

**Cadastro de Clientes e Fornecedores:** Permite registrar os dados de pessoas físicas ou jurídicas com as quais a empresa se relaciona, incluindo CPF/CNPJ, contatos e endereço.

**Registro de Vendas e Compras:** O sistema possibilita o controle completo de vendas a clientes e compras com fornecedores, incluindo a data, valor total, forma de pagamento, status, descontos aplicados e natureza da operação. Cada operação é detalhada por meio de itens, associando produtos às quantidades e valores praticados no momento da transação.

Confira nosso protótipo pelo link: [Protótipo Figma](https://www.figma.com/design/TTTqIOF19VRx0iedErfwFu/Prot%C3%B3tipo-Vendex?node-id=0-1&t=jTD0g2Lefnx3GT8S-1)
#### 4.3.2 Esquema Relacional

![Image](https://github.com/user-attachments/assets/b275c004-dd21-4a73-a2d4-dda49867adb6)

#### 4.3.3 Modelo Físico
```
CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    prazo_pagamento VARCHAR(50) NOT NULL,
    fornecedor_id INT,
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    prazo_pagamento VARCHAR(50) NOT NULL,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
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
```

### 4.4. Tecnologias

| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | MySQL           |
| Front end      | HTML, CSS, Bootstrap     |
| Back end       | Node.js |
| Deploy         | Vercel    |
| IDE            | Visual Studio Code  |
| Versionamento  | GitHub             |

### Descrição das Tecnologias

HTML, CSS, Bootstrap: utilizados na construção da interface do sistema. Garantem uma experiência amigável e responsiva, possibilitando que o sistema seja acessado facilmente por navegadores em computadores e dispositivos móveis.

JavaScript: garante a dinâmica da página e integração com Banco de Dados

MySQL: sistema de gerenciamento de banco de dados relacional, utilizado para armazenar de forma estruturada e segura os dados de vendas, clientes, fornecedores e controle financeiro.

Vercel: plataforma utilizada para o deploy do front-end. Permite hospedar o sistema de forma gratuita e prática, facilitando o acesso do usuário final via navegador.

Visual Studio Code: IDEs utilizadas para o desenvolvimento do sistema, oferecendo recursos como autocompletar, debug e controle de versionamento.

Git: sistema de controle de versão distribuído, utilizado para gerenciar o histórico de alterações no código-fonte e facilitar o trabalho colaborativo entre desenvolvedores.

### Fluxo de Interação entre as Tecnologias

O fluxo abaixo representa a forma como o usuário interage com o sistema, desde a interface até o banco de dados, passando pelas camadas de aplicação:

```
[Usuário]
                          
   ↓
[Navegador Web: HTML/CSS/JS]

   ↓ (chamada REST)

[API Back-end: Node.js]

   ↓ (requisição SQL)

[Banco de Dados: MySQL]

   ↑ (dados consultados/alterados)

[API Back-end: retorna JSON]

   ↑
[Interface Web exibe os dados]
```
Esse fluxo acontece, por exemplo, ao realizar o cadastro de um cliente ou com registro de vendas: a informação percorre todas as camadas do sistema e retorna com segurança e agilidade para o usuário.

 
