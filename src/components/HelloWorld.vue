<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrements">减少</button>
    <button @click="incrementAsync">延时增加</button>
    <p>{{count}}</p>
    <p>{{isEvenOrOdd}}</p>
    <p>{{Identity}}</p>
    <p>{{language}}</p>
    <p>{{$t('hello')}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapGetters(["count", "isEvenOrOdd", "Identity", "language"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementAsync"]),
    decrements() {
      this.decrement(1);
    }
  }
};
</script>