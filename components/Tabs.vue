<script lang="ts" setup>
  defineProps(["tabs", "changeTab"]);
</script>

<template>
  <ul class="tabs">
    <li 
      v-for="(t,index) in tabs" 
      :key="index" 
      @click="changeTab(t.tab)"
      class="button tab"
      :class="{active: t.active}"
    >
      {{ t.content }}
    </li>
  </ul>
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