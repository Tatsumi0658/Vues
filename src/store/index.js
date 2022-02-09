import { createStore } from 'vuex'

export const store = createStore({
  state: {
    count: 0
  },
  getters: {
    storecount(state){
      return state.count
    }
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    incrementAction(ctx){
      ctx.commit('increment')
    }
  }
})
