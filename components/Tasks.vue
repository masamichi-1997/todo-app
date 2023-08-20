<script lang="ts" setup>
  defineProps(["todos", "deleteTodo"])
</script>

<template>
  <Transition name="list">
    <p v-if="!todos.length" class="no-task">タスクが存在しません</p>
  </Transition>

  <transition-group name="list" tag="ul" class="lists">
    <li v-for="todo in todos" :key="todo.id" class="task-container">
      <div class="task">
        <input type="checkbox" v-model="todo.isComplete" :id="todo.id">
        <label :for="todo.id">{{ todo.task }}</label>
      </div>
      <button @click="deleteTodo(todo)" class="button delete">削除</button>
    </li>
  </transition-group>
</template>

<style scoped>
.lists {
  margin: 0 auto;
  max-width: 500px;
}
.no-task {
  color: var(--black);
  text-align: center;
  margin: var(--space-xs);
}

.task-container {
  margin: var(--space-xs) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task {
  display: flex;
  align-items: center;
  color: var(--black);
  font-size: var(--body);
}

.task input {
  cursor: pointer;
  margin-right: 10px;
}

.task input[type=checkbox] {
  transform: scale(1.5);
  color: var(--accent);
}

.task label {
  cursor: pointer;
}

.delete {
  color: red;
  border: 1px solid red;
  background-color: var(--white);
}

.delete:hover {
  border: 0;
  color: var(--white);
  background-color: red;
}


/* アニメーション */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>