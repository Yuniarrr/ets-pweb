<template>
  <div class="mx-auto w-screen">
    <label for="list">List {{ length }}</label>
    <button @click="store.increment()" class="ml-2 bg-slate-300">+</button>
    <div>
      <label for="beforeSort">Before Sort</label>
      <ul>
        <li v-for="(item, index) in store.store" :key="index">
          id: {{ item.id }} || counter: {{ item.data.counter }}
          <button class="bg-slate-300 my-1" @click="store.DeleteCounter(item.id)">
            Delete
          </button>
          <button
            class="bg-slate-300 my-1 mx-1"
            @click="store.IncreaseSubCounter(item.id)"
          >
            +
          </button>
          <button
            class="bg-slate-300 my-1 mx-1"
            @click="store.DecreaseSubCounter(item.id)"
          >
            -
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div>{{ store.store }}</div>
</template>

<script>
import { useStore } from "./stores/index.js";
export default {
  data() {
    return {
      length: 0,
    };
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  created() {
    this.store.getCounter();
  },
  watch: {
    "store.store": {
      handler: function (val) {
        this.length = val.length;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
