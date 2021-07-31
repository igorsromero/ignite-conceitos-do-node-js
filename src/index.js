const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if(!user) {
    return response.status(404).json({"error": 'Mensagem do erro'});
  }

  request.user = user;

  return next();

}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const usersAlreadyExists = users.some(user => user.username === username);

  if(usersAlreadyExists) {
    return response.status(400).json({ "error": 'Mensagem do erro'});
  }

  users.push({
    id: uuidv4(),
    name,
    username,
    todos: []
  });

  return response.status(201).json(users[users.length - 1]);

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todosInformation = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(todosInformation);

  return response.status(201).json(todosInformation);

});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;
  const id_todo = request.params.id;

  const todo = user.todos.find(todo => todo.id === id_todo);

  if (todo) {
    todo.title = title;
    todo.deadline = new Date(deadline);
    response.json(todo);
  } else {
    return response.status(404).json({ "error": 'Mensagem do erro' });
  }

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const id_todo = request.params.id;

  const todo = user.todos.find(todo => todo.id === id_todo);

  if(todo){
    todo.done = true;
    return response.json(todo);
  } else {
    return response.status(404).json({ "error": 'Mensagem do erro' });
  }

});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const id_todo = request.params.id;

  const todo = user.todos.find(todo => todo.id === id_todo);  
  
  if (todo) {
    const indexOfUser = users.indexOf(user);
    const indexOfTodo = users[indexOfUser].todos.indexOf(todo);
    users[indexOfUser].todos.splice(indexOfTodo, 1);
    return response.sendStatus(204);
  } else {
    return response.status(404).json({ "error": 'Mensagem do erro' });
  }

});

module.exports = app;