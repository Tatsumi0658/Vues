<template>
  <div>
    <ol>
      <template v-for="(todo,index) in todos" :key="todo.id">
        <li v-if="todo.done==false">
          {{ todo.title }}
          <button v-on:click="done(index)">完了</button>
        </li>
      </template>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'List',
    props: {
      allTodos: Array
    },
    data() {
      return {
        todos: this.allTodos
      }
    },
    methods: {
      done(index){
        this.todos[index].done = true
      }
    }
  }
</script>
