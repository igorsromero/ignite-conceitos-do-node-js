# Ignite - Conceitos do Nodejs

Api desenvolvida como desafio do primeiro capitulo do curso Ignite Nodejs.

Durante o desenvolvimento foi colocado em pratica conceitos de HTTP, Middleware e Express.

---
## Sobre o projeto
---
<details>
<summary>Saiba mais</summary>

Nesse desafio, é necessário criar uma aplicação para treinar o que foi aprendido até agora no Node.js.
Essa será uma aplicação para gerenciar tarefas (em inglês *todos*). Será permitida a criação de um usuário com `name` e `username`, bem como fazer o CRUD de *todos*.

[Mais informações sobre o desafio podem ser acessadas através deste link.](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8#dbed5b2fcb0a4b50a41f88b16954a360)

</details>

<details>
<summary>Para clonar o projeto</summary>

Clonar o projeto
```
git clone https://github.com/igorsromero/ignite-conceitos-do-node-js.git
```

Instalar as depêndencias
```
yarn install
```

Executar os testes
```
yarn test
```
</details>

---

### Requisitos

- [x] Deve ser possível criar um usuário
- [x] Deve ser possível listar todos os *todos* do usuário
- [x] Deve ser possível criar um novo *todo*
- [x] Deve ser possível atualizar um *todo*
- [x] Deve ser possível deletar um *todo*

---

### Regras de negócio

- [x] Não deve ser posssível cadastrar um novo usuárrio quando o username ja existir
- [x] Não deve ser possível atualizar um *todo* que não existe
- [x] Não deve ser possível marcar um *todo* que não existe como feito
- [x] Não deve ser possível deletar um *todo* que não existe

---