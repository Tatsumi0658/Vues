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
    ]
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
    }
  },
  mutations: {
    increment(state){
      state.count++
    },
    changeMessage(state){
      state.message = 'changed'
    },
    addTodos(state){
      state.todos.push({id: state.todos.length + 1, name: 'bbb'})
    }
  },
  actions: {
    incrementAction(ctx){
      ctx.commit('increment')
    },
    changeMessageAction(ctx){
      ctx.commit('changeMessage')
    },
    addTodosAction(ctx){
      ctx.commit('addTodos')
    }
  }
})
