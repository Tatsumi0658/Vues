<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div id="app">
    {{ this.$store.state.count }}
    <button @click="increment">追加</button>
    {{ storecount }}
    <br>
    <button @click="changeMess">変更</button>
    {{ this.$store.state.message }}
    {{ changeMessage }}
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      increment(){
        this.$store.dispatch('incrementAction')
      },
      changeMess(){
        this.$store.dispatch('changeMessageAction')
      }
    },
    computed: {
      storecount() {
        return this.$store.getters.storecount
      },
      changeMessage() {
        return this.$store.getters.storeMessage
      }
    }
    /*computed: {
      count() {
        return this.$store.state.count
      }
    }*/
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
