import Demo from "./components/Demo.vue";
// Demo 是一个 options 对象

new Vue({
  components: { Demo },
  data: {
    visible: true,
  },
  template: `
    <div id="app1">
      <button @click="toggle">toggle</button>
      <hr>
      <Demo v-if="visible === true"/>
    </div>
  `,
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
}).$mount("#app");
