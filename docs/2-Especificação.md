# Especificações do Projeto

Nesta seção, apresentaremos uma visão geral dos principais desafios enfrentados por pequenas e médias empresas no controle financeiro e operacional, com foco em comerciantes e prestadores de serviços. A partir da perspectiva do usuário, abordaremos a necessidade de integrar os setores de vendas, compras, financeiro e cadastro, oferecendo uma solução prática e eficiente por meio de um sistema ERP. Para isso, serão utilizadas as seguintes técnicas e ferramentas: definição de Personas, elaboração de Histórias de Usuários, identificação dos Requisitos Funcionais e Não Funcionais, além das Restrições do Projeto. Essas especificações visam garantir que a solução proposta atenda efetivamente às necessidades dos usuários, proporcionando uma gestão financeira organizada, segura e estratégica.

## Personas

1 - Roberto Almeida tem 38 anos é Analista Financeiro Sênior, e trabalha há mais de 10 anos na área financeira e possui vasta experiência em controle orçamentário, análise de fluxo de caixa e planejamento financeiro. É responsável por elaborar relatórios financeiros e apresentar projeções para a diretoria. Recentemente, Roberto cometeu um erro na consolidação de dados financeiros, resultando em discrepâncias no relatório trimestral enviado à gestão. 

2 - Ana Costa tem 35 anos, é Gerente Comercial, e trabalha há 8 anos na área comercial, com experiência em vendas e gestão de processos internos. Ela é responsável por coordenar as vendas e os relacionamentos com fornecedores e clientes na empresa, especializada na venda de equipamentos para a produção de medicamentos. Ana lidera a estratégia comercial e busca sempre melhorar os processos para otimizar a eficiência da empresa. Recentemente, Ana enfrentou desafios em controlar as áreas de vendas, compras e finanças, o que dificultou a tomada de decisões e prejudicou o relacionamento com os fornecedores.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Analista Financeiro  | Ter um controle financeiro integrado e preciso           | Apresentar melhores relatórios               |
|Gerente Comercial       | Gerir e conectar as áreas de vendas, compras                 | Otimizar a eficiência nos processos |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir o cadastro das receitas e despesas da organização| ALTA | 
|RF-02| O sistema deve realizar o registro de clientes e fornecedores   | ALTA |
|RF-03|O sistema deve realizar o cadatro dos itens e classificar quanto a produto ou serviço   | MÉDIA |
|RF-04|Tela de login funcional e cadastro de usuário   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo. | ALTA| 
|RNF-02| A documentação do sistema deve ser clara e atualizada periodicamente. |  BAIXA | 
|RNF-03| O sistema deve cumprir as normas de proteção de dados, como LGPD e GDPR. |  ALTA | 
|RNF-04| O sistema deve ser compatível com sistemas operacionais Windows, Linux e MacOS. |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O sistema não poderá incluir suporte a múltiplos idiomas na primeira versão| 
|04| O sistema não poderá ter mais de três ferramentas de integração externas| 
|05| O projeto não inclui módulos de inteligência artificial|

 

