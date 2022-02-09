import { createStore } from 'vuex'

export const store = createStore({
  state: {
    count: 0
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
