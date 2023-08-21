<script lang="ts" setup>
  import { useTodosStore, Todo } from "../stores/todos";
  import { v4 as uuidv4 } from "uuid"
  const store = useTodosStore();
  const newTask = ref("");
  
  const addTodo = () => {
    if(newTask.value.trim() === "") return alert("タスクが未入力です");
    const newTodo: Todo = {
      id: uuidv4(),
      task: newTask.value,
      isComplete: false,
    }
    store.addTodo(newTodo);
    newTask.value = "";
  }
</script>

<template>
  <div>
    <h2>新規タスクの追加</h2>
    <div class="form">
      <input 
        type="text" 
        v-model="newTask"
        placeholder="タスクを入力して下さい"
        class="input"
      >
      <button @click="addTodo" class="button add">追加</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  outline: none;
  width: 80%;
  padding: 12px;
  max-width: 350px;
  border-radius: 5px;
  margin-right: 10px;
  color: var(--gtay-25);
  font-size: var(--body);
  border: 1px solid green;
}

.input:focus {
  border: 2px solid green;
}

.add {
  color: green;
  border: 1px solid green;
}

.add:hover {
  border: 0;
  color: var(--white);
  background-color: green;
}
</style>
