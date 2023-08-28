<script lang="ts" setup>
  defineProps(["todos", "deleteTodo"])
</script>

<template>
  <div class="tasks">
    <Transition name="tasks">
      <p v-if="!todos.length" class="no-task">タスクが存在しません</p>
    </Transition>
  
    <transition-group name="tasks" tag="ul">
      <li v-for="todo in todos" :key="todo.id" class="task-container">
        <div class="task">
          <input type="checkbox" v-model="todo.isComplete" :id="todo.id">
          <label :for="todo.id" :class="{ checked: todo.isComplete }">{{ todo.task }}</label>
        </div>
        <button @click="deleteTodo(todo)" class="button delete">削除</button>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.tasks {
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

.checked {
  text-decoration: line-through;
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
.tasks-move,
.tasks-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.tasks-leave-active {
  position: absolute;
}
</style>