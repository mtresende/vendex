# 3. Modelagem dos Processos de Negócio

## 3.1. Modelagem da situação atual (Modelagem AS IS)

Modelagem da Situação Atual (AS-IS) - Descrição Textual
Atualmente, empresas de pequeno e médio porte, especialmente no setor comercial, realizam a gestão financeira de forma manual ou com ferramentas básicas e não integradas, como cadernos, planilhas de Excel ou aplicativos simples de anotações. O fluxo financeiro e o controle de vendas e compras seguem um processo fragmentado, com vários pontos de retrabalho e risco de erros:

### Processo Atual (AS-IS) Registro de Vendas:

Cada venda é registrada manualmente em um caderno ou planilha.
Não há integração com o controle de estoque.
Não há atualização automática de contas a receber.

### Registro de Compras:

As compras são feitas conforme a necessidade, sem planejamento
Notas fiscais e comprovantes são arquivados fisicamente ou em pastas digitais, dificultando o controle.
Não há baixa automática no financeiro.

### Controle de Contas a Pagar e Receber:

Utilizam uma planilha simples ou anotação manual para listar pagamentos e recebimentos.
A falta de atualização frequente leva a atrasos ou esquecimentos de contas.
Não há conciliação com o extrato bancário.

### Cadastro de Clientes e Fornecedores:

Geralmente armazenado em planilhas ou cadernos, sem atualização frequente.
Falta histórico de compras/vendas por cliente ou fornecedor.

### Decisões Financeiras:

Baseadas na percepção do dono ou gerente, sem dados consolidados.
Dificuldade em visualizar a real situação financeira da empresa.
Principais problemas do processo atual (AS-IS):
Retrabalho constante para conferir dados;
Alto risco de erros de digitação ou lançamentos esquecidos;
Falta de integração entre setores (vendas, estoque, financeiro);
Dificuldade de acesso a informações históricas ou relatórios;
Decisões tomadas no "achismo", sem base concreta;
Risco de inadimplência e atraso por falta de controle dos vencimentos.

## 3.2. Descrição geral da proposta (Modelagem TO BE)

Para resolver os problemas identificados na situação atual (AS-IS), propomos a implementação de um **sistema de gestão financeira integrado**, automatizando os processos financeiros e operacionais, com foco em eficiência, precisão e controle e coleta de dados. A solução contempla **vendas, compras, análise de cotação, contas a pagar/receber, fluxo de caixa, cadastro de clientes/fornecedores e controle de estoque**.

### Registro de vendas
- Registros feitos diretamente no sistema, com atualização automática de estoque e contas a receber.
- Integração com emissão de notas fiscais.
- Histórico detalhado de cada cliente disponível para consulta.
Entradas do processo: Valor, Cliente, Produto, Quantidade.
Saída: Relatório do faturamento, produtos em estoque, vendas.

### Registro de compras
- Compras planejadas com base na necessidade do estoque.
- Após aprovação, entrada de mercadorias atualiza automaticamente o estoque e contas a pagar.
Entradas do processo: Mercadoria, Fornecedor, Quantidade.

### Cadastro de produtos
- Será utilizado no lançamento de compras e vendas.
- Cadastro conforme demanda.
- Descrição e categoria de cada item.

### Cadastro de Clientes e Fornecedores
- Dados centralizados e atualizados.
- Histórico completo de transações.
- Condições comerciais e análise de desempenho registrados.

## 3.3. Modelagem dos processos

[PROCESSO 1 - Registro de vendas](./processos/processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Registro de compras](./processos/processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Cadastro de Clientes e Fornecedores](./processos/processo-3-nome-do-processo.md "Detalhamento do Processo 3.")

[PROCESSO 4 - Cadastro de Produtos](./processos/processo-4-nome-do-processo.md "Detalhamento do Processo 4.")
