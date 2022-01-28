<template>
  <!--<input v-model="title">
  <button v-on:click="add">追加</button>
  {{ title }}-->
  <Form @add="add" />
  <!--<ol>
    <li v-for="(todo,index) in todos" :key="todo.index">
      {{ todo.index }}
      {{ todo.title }}
      <button v-on:click="done(index)">完了</button>
    </li>
  </ol>-->
  <List :allTodos="todos" />
  <Count />
</template>

<script>
import Count from './components/Count.vue'
import List from './components/List.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Count,
    List,
    Form
  },
  data(){
    return{
      title: '',
      todos: [{id:1, title: 'hello', done: false}]
    }
  },
  methods: {
    add(title){
      this.todos.push({id: this.todos.length + 1, title: title, done: false})
      this.title = ''
      console.log(this.todos)
    },
    done(index){
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
