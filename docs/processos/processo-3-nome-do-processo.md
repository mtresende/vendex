### 3.3.3 Processo 3 – Cadastro de Clientes e Fornecedores

![Image](https://github.com/user-attachments/assets/5f2425e5-c101-4cfb-a7f0-2fa82dcf9ebf)

**Descrição do Processo:** O processo de Cadastro de Clientes e Fornecedores é
responsável por gerenciar as informações de todas as entidades externas com as quais a
organização mantém relações comerciais, tanto para compras quanto para vendas. Esse
processo garante que os dados sobre clientes e fornecedores sejam inseridos e
atualizados corretamente no sistema para facilitar transações futuras.

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


Atividade 02 - Preencher dados do cliente ou fornecedor

| Campo         | Tipo            | Restrições | Valor default |
|---------------|-----------------|------------|---------------|
|         Tipo  | Checkbox  |Obrigatório |   Cliente            |
|         Nome  | Caixa de Texto  |Obrigatório |               |
|   Cpf ou CNPJ | Caixa de texto       |Apenas números, Obrigatório |          |
| Telefone        | Caixa de texto |(xx)xxxxx-xxxx, obrigatório|          |
| CEP| Caixa de texto        |XXXXX-XXX, obrigatório |           |
| Cidade| Caixa de texto        |obrigatório |           |
| Estado| Caixa de texto        |obrigatório |           |
| Rua| Caixa de texto        |obrigatório |           |
| Número| Caixa de texto        |Apenas números, obrigatório |           |
| Complemento| Caixa de texto        |obrigatório |           |

**Comando**

| Comando              | Destino                          | Tipo   |
|----------------------|-----------------------------------|--------|
| Botão de confirmação | Confirmar cadastro| Default |

---
Atividade 03- Confirmar cadastro

**Comando**

| Comando              | Destino                  | Tipo   |
|----------------------|---------------------------|--------|
| Botão de confirmação | Página inicial  | Default |
