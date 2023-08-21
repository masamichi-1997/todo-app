<script lang="ts" setup>
    import { Todo, useTodosStore} from "../stores/todos";
    const store = useTodosStore();

    const todos: Ref<Todo[]> = computed(() => store.todos)
    const completed: Ref<Todo[]> = computed(() => store.todos.filter((todo) => todo.isComplete))
    const incomplete: Ref<Todo[]> = computed(() => store.todos.filter((todo) => !todo.isComplete))

    const deleteTodo = (todo: Todo) => {
      if(!todo.isComplete) return alert("まだタスクが完了していません")
      store.deleteTodo(todo.id);
    };

    const activeTab: Ref<string> = ref("all");

    interface Tabs {
      tab: string,
      content: string,
      active: boolean,
    }

    const tabs: Ref<Tabs[]> = ref([
      { tab: "all", content: "全て", active: true },
      { tab: "incomplete", content: "未完了", active: false },
      { tab: "completed", content: "完了", active: false },
    ]);

    const changeTab = (tab: string) => {
      tabs.value.forEach((t) => t.tab == tab ? t.active = true : t.active = false );
      activeTab.value = tab;
    };
</script>

<template>
  <div>
    <h2>タスクリスト</h2>

    <Tabs :tabs="tabs" :change-tab="changeTab" />
    
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