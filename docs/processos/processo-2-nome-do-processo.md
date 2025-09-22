### 3.3.2 Processo 2 – Registro de compras

![Image](https://github.com/user-attachments/assets/7bd17ba3-351b-4b36-ac52-03f185f524fd)

**Descrição do Processo**: O processo de Registo de Compras visa controlar todas as aquisições de produtos ou serviços feitas pela organização. Este processo assegura que as informações sobre fornecedores, valores, itens adquiridos, e as condições de pagamento sejam corretamente inseridas e atualizadas no sistema. 

### Etapas do Processo: 

ATIVIDADE 01 -Acessar plataforma

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Login         | Caixa de Texto  |Obrigatório |               |
| Senha         | Caixa de texto  |Obrigatório |               |


| Comando              | Destino                | Tipo   |
|----------------------|-------------------------|--------|
| Entrar   | HomePage | Submit |

Atividade 02 - Preencher dados da compra

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
| Numero da Compra | Caixa de texto |Apenas números, obrigatório|           |
| Data          | Caixa de Texto  |xx/xx/xx, Obrigatório |     |
| Nome dos produtos | Caixa de texto       |Obrigatório |      |
| Quantidade    | Caixa de texto      |Apenas números, obrigatório |               |
| Valor         | Caixa de texto |Apenas números, obrigatório|        |
| Forma de pagamento| Caixa de texto        |obrigatório |            |
| Prazo de pagamento         | Caixa de texto |obrigatório|           |


**Comando**

| Comando              | Destino                          | Tipo   |
|----------------------|-----------------------------------|--------|
| Botão de confirmação | Confirmar compra| Default |

---

Atividade 03 - Confirmar compra

| Comando              | Destino             | Tipo   |
|----------------------|----------------------|--------|
| Botão de confirmação |Página inicial | Default|
