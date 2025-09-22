### 3.3.4 Processo 4 – Cadastro de Produtos/Serviços

![Image](https://github.com/user-attachments/assets/ed85aaf6-9363-4264-b25d-ded013510fb0)

**Descrição do Processo:** : O processo de Cadastro de Produtos/Serviços tem como
objetivo registrar e gerenciar todas as informações relacionadas aos itens oferecidos pela
organização, sejam eles produtos ou serviços. Este processo assegura que os dados
essenciais sobre cada item sejam corretamente inseridos no sistema, para facilitar sua
venda, compra, controle de estoque e integração com os processos financeiros.

### Etapas do Processo:
ATIVIDADE 01 -Acessar plataforma

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Login         | Caixa de Texto  |Obrigatório |               |
| Senha         | Caixa de texto  |Obrigatório |               |


| Comando              | Destino                | Tipo   |
|----------------------|-------------------------|--------|
| Entrar   | HomePage | Submit |

---

ATIVIDADE 02 - INformar tipo de registro

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Produto         | Caixa de Texto  |Obrigatório |               |
| Serviço         | Caixa de texto  |Obrigatório |               |

**Comando**

| Comando              | Destino                  | Tipo   |
|----------------------|---------------------------|--------|
| Botão de confirmação | Página inicial  | Default |

---

ATIVIDADE 03 - Preencher dados do produto

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Nome do produto    | Caixa de Texto  |Obrigatório |         |
| Validade do produto| Caixa de texto  | xx/xx/xxxx, Obrigatório   |          |
| Codigo de barras   | Caixa de texto  |Apenas números, obrigatório|          |
| ID                 | Caixa de texto  |Apenas números, obrigatório|          |
| Quantidade         | Caixa de texto  |Apenas números, obrigatório|          |

**Comando**

| Comando              | Destino                          | Tipo   |
|----------------------|-----------------------------------|--------|
| Botão de confirmação | Confirmar cadastro| Default |

---

ATIVIDADE 04 - Preencher dados do serviço

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Nome do serviço    | Caixa de Texto  |Obrigatório |         |
| ID                 | Caixa de texto  |Apenas numeros, Obrigatório   |          |
| Categoria          | Caixa de texto  |Obrigatório|          |

**Comando**

| Comando              | Destino                          | Tipo   |
|----------------------|-----------------------------------|--------|
| Botão de confirmação | Confirmar cadastro| Default |

---

ATIVIDADE 05- Confirmar cadastro do produto

**Comando**

| Comando              | Destino                  | Tipo   |
|----------------------|---------------------------|--------|
| Botão de confirmação | Página inicial  | Default |

