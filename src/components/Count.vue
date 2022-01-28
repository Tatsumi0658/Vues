<template>
  <div>
    <button v-on:click="countAdd">数える</button>
    {{ count }}
  </div>
</template>
<script>
  export default {
    name: 'Count',
    data() {
      return {
        count: 1
      }
    },
    methods: {
      countAdd: function() {
        this.count += 1
      }
    }
  }
</script>
