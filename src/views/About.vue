<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Count />
    <Form @add="add" />
    <List :allTodos="todos" />
    <router-link :to="{ name: 'Pages', params: {id:1} }">詳細ページ</router-link>
    <br />
    <button @click="changeMess">文言変更</button>
    {{ changeMessage }}
  </div>
</template>
<script>
  import Count from '@/components/Count.vue'
  import List from '@/components/List.vue'
  import Form from '@/components/Form.vue'

  export default {
    name: 'About',
    data() {
      return {
        todos: [{id:1, title: 'title', done: false}]
      }
    },
    methods: {
      add(title){
        this.todos.push({id: this.todos.length +1, title: title, done: false})
        this.title=""
      },
      done(index){
        this.todos[index].done = true
      },
      changeMess(){
        this.$store.dispatch('changeMessageAction')
      }
    },
    computed: {
      changeMessage(){
        return this.$store.getters.storeMessage
      }
    },
    components: {
      Count,
      List,
      Form
    }
  }
</script>
