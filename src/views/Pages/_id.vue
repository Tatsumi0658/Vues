<template>
  <div>
    {{ $route.params.id }}
    aaaz
    <router-link :to="{ name: 'PagesProfile', params: { id: $route.params.id } }">プロフィールページ</router-link>
    <router-link :to="{ name: 'PagesAbout', params: { id: $route.params.id } }">詳細ページ</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Pages'
  }
</script>
