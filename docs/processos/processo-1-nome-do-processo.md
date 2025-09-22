### 3.3.1 Processo 1 – Registo de vendas

![Image](https://github.com/user-attachments/assets/96b955e2-f350-4bcf-87a9-12b32695a84b)

**Descrição do Processo**: O processo de Registo de Vendas tem como objetivo registrar todas as transações de vendas realizadas pela organização, garantindo que as informações sobre clientes, produtos, valores e condições de pagamento sejam corretamente armazenadas no sistema. Este processo inicia quando uma venda é realizada e termina com a confirmação do registro da transação no banco de dados, pronto para ser consultado ou usado em relatórios financeiros. 

#### Etapas do Processo: 

ATIVIDADE 01 -Acessar plataforma

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Login         | Caixa de Texto  |Obrigatório |               |
| Senha         | Caixa de texto  |Obrigatório |               |


| Comando              | Destino                | Tipo   |
|----------------------|-------------------------|--------|
| Entrar   | HomePage | Submit |

---

Atividade 02 - Preencher dados de venda

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Data      | Caixa de Texto  |xx/xx/xx, Obrigatório |               |
|   Nome do produto| Caixa de texto       |Obrigatório |               |
| Quantidade| Caixa de texto        |Apenas números, obrigatório |               |
| Valor       | Caixa de texto |Apenas números, obrigatório|           |
| Forma de pagamento| Caixa de texto        |obrigatório |               |
| Prazo de pagamento         | Caixa de texto |obrigatório|           |
|Data da venda       | Caixa de texto |Apenas números, obrigatório|           |


**Comando**

| Comando              | Destino                          | Tipo   |
|----------------------|-----------------------------------|--------|
| Botão de confirmação | Confirmar venda| Default |

---

Atividade 03 - Confirmar venda

| Comando              | Destino             | Tipo   |
|----------------------|----------------------|--------|
| Botão de confirmação |Página inicial | Default|
