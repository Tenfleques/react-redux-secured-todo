export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getUsersState = store => store.users;
export const getUserList = store => getUsersState(store) || [];

export const getMe = store => store.me || {};

