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
    <div v-for="item in this.$store.getters.storeTodos" :key="item.id">
      {{ item.name }}
    </div>
    <input type="text" />
    <button @click="addTodos">追加</button>
    <br />
    {{ changeTodos }}
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
      },
      addTodos(){
        this.$store.dispatch('addTodosAction')
      }
    },
    computed: {
      changeMessage(){
        return this.$store.getters.storeMessage
      },
      changeTodos(){
        return this.$store.getters.storeTodos
      }
    },
    components: {
      Count,
      List,
      Form
    }
  }
</script>
