import { createStore } from 'vuex'


export const store = createStore({
  state: {
    count: 0,
    message: 'hello',
    todos: [
      {
        id: 1,
        name: 'aaa'
      }
    ],
    keyword: 'keyword'
  },
  getters: {
    storecount(state){
      return state.count
    },
    storeMessage(state){
      return state.message
    },
    storeTodos(state){
      return state.todos
    },
    storeKeyword(state){
      return state.keyword
    }
  },
  mutations: {
    increment(state){
      state.count++
    },
    changeMessage(state){
      state.message = 'changed'
    },
    addTodos(state, payload){
      state.todos.push({id: state.todos.length + 1, name: payload})
    },
    changeKeyword(state, payload){
      state.keyword = payload
    }
  },
  actions: {
    incrementAction(ctx){
      ctx.commit('increment')
    },
    changeMessageAction(ctx){
      ctx.commit('changeMessage')
    },
    addTodosAction({commit}, payload){
      commit('addTodos', payload)
    },
    changeKeywordAction({commit}, payload){
      commit('changeKeyword', payload)
    }
  }
})
