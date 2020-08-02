import user from './user.js';
import products from './product.js';
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    products
  }
})

export default store