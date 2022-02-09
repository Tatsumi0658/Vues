import { createStore } from 'vuex'


export const store = createStore({
  state: {
    count: 0,
    message: 'hello'
  },
  getters: {
    storecount(state){
      return state.count
    },
    storeMessage(state){
      return state.message
    }
  },
  mutations: {
    increment(state){
      state.count++
    },
    changeMessage(state){
      state.message = 'changed'
    }
  },
  actions: {
    incrementAction(ctx){
      ctx.commit('increment')
    },
    changeMessageAction(ctx){
      ctx.commit('changeMessage')
    }
  }
})
