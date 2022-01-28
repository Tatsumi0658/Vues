<template>
  <div>
    <input v-model="title">
    <button v-on:click="add">追加</button>
  </div>
</template>
<script>
  export default {
    name: 'Form',
    data() {
      return {
        title: ''
      }
    },
    methods:{
      add() {
        this.$emit("add", this.title)
        this.title = ''
      }
    }
  }
</script>
