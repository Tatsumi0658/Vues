<template>
  <div>
    {{ $route.params.id }}
    aaaz
    <router-link :to="{ name: 'PagesProfile', params: {id: $route.params.id } }">あああ</router-link>
    <router-link to="/pages/1/profile">繊維</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Pages'
  }
</script>
