<script lang="ts" setup>
  import { useTodosStore, Todo } from "../stores/todos";
  import { v4 as uuidv4 } from "uuid"
  const store = useTodosStore();
  const newTask: Ref<string> = ref("");
  
  const addTodo = () => {

    const max = 50 // 最大文字数
    const min = 2 // 最低文字数

    if(newTask.value.trim() === "") return alert("タスクが未入力です");
    if(newTask.value.length > max) return alert(`${max}文字以内で入力して下さい`);
    if(newTask.value.length < min) return alert(`${min}文字以上で入力して下さい`);

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
