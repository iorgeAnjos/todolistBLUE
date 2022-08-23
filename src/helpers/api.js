const TodoContext = {
  todoEndpoint: () => `${Api.baseUrl}/paletas`,
  todoLista: () => `${TodoContext.todoEndpoint()}/all-paletas`,
  todoById: (id) => `${TodoContext.todoEndpoint()}/one-paleta/${id}`,
  createTodo: () => `${TodoContext.todoEndpoint()}/create-paleta`,
  updateTodoById: (id) => `${TodoContext.todoEndpoint()}/update-paleta/${id}`,
  deleteTodoById: (id) => `${TodoContext.todoEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
  baseUrl: 'https://apielgeladon-blue.onrender.com',
  ...TodoContext,
};
