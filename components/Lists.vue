<script lang="ts" setup>
    import { Todo, useTodosStore} from "../stores/todos";
    const store = useTodosStore();

    const todos = computed(() => store.todos)
    const completed = computed(() => store.todos.filter((todo) => todo.isComplete))
    const incomplete = computed(() => store.todos.filter((todo) => !todo.isComplete))

    const deleteTodo = (todo: Todo) => {
      if(!todo.isComplete) return alert("まだタスクが完了していません")
      store.deleteTodo(todo.id);
    };

    const activeTab = ref("all");

    interface Tabs {
      tab: string,
      content: string,
      active: boolean,
    }

    const tabs: Tabs[] = [
      { tab: "all", content: "全て", active: true },
      { tab: "incomplete", content: "未完了", active: false },
      { tab: "completed", content: "完了", active: false },
    ];

    const changeTab = (tab: string) => {
      tabs.forEach((t) => t.tab == tab ? t.active = true : t.active = false );
      activeTab.value = tab;
    };
</script>

<template>
  <div>
    <h2>タスクリスト</h2>

    <ul class="tabs">
      <li 
      v-for="(t,index) in tabs" 
      :key="index" 
      @click="changeTab(t.tab)"
      class="button tab"
      :class="{active: t.active === true}"
      >
        {{ t.content }}
      </li>
    </ul>
    
    <Tasks
      v-if="activeTab === 'all'"
      :todos="todos" 
      :delete-todo="deleteTodo"
    />

    <Tasks 
      v-else-if="activeTab === 'incomplete'" 
      :todos="incomplete" 
      :delete-todo="deleteTodo" 
    />

    <Tasks
      v-else-if="activeTab === 'completed'"
      :todos="completed" 
      :delete-todo="deleteTodo"
    />

  </div>
</template>

<style scoped>
.tabs {
  gap: 3rem;
  display: flex;
  justify-content: center;
}

.tab {
  cursor: pointer;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.tab:hover {
  border: 0;
  color: var(--white);
  background-color: var(--accent);
}

.active {
  border: 0;
  color: var(--white);
  background-color: var(--accent);
}
</style>