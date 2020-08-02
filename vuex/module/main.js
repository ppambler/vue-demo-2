import store from './stores/index.js';
const mapState = Vuex.mapState
const mapMutations = Vuex.mapMutations
const mapActions = Vuex.mapActions

console.log(store.state.user)
new Vue({
  el: '#app',
  store,
  computed: {
    ...mapState(['user', 'products']),
    ...mapState('user', ['name', 'age']),
    ...mapState('products', ['name', 'age']),
  }
})