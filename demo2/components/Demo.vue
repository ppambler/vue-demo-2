<template>
  <div class="demo">
    {{ n }}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Demo",
  // data 必须是函数
  data() {
    return { n: 0 };
  },
  beforeCreate() {
    console.log("1-beforeCreate");
    console.log(this.n); // -> undefined
    // console.log(this.setN(66)); // -> TypeError: this.setN is not a function
  },
  created() {
    console.log("2-created");
    console.log(this.n); // -> 0
    console.log(this.setN(66)); // -> 'setN ok!'
  },
  beforeMount() {
    console.log("3-beforeMount");
    console.log(document.getElementById("app")); // -> <div id="app"></div>
  },
  mounted() {
    console.log("4-mounted");
    console.log(document.getElementById("app")); // -> null
    console.log(document.getElementById("app1")); // -> div#app1
  },
  methods: {
    add() {
      this.n++;
    },
    setN(n) {
      this.n = n;
      return "setN ok!";
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  color: lightcoral;
}
</style>
