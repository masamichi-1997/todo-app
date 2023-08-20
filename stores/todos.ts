import { defineStore } from "pinia";

export interface Todo {
  id: string;
  task: string;
  isComplete: boolean,
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(todo: Todo) { 
      this.todos.push(todo);
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  persist: true,
});
