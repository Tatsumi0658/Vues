<template>
  <div>
    {{ $route.params.id }}
    aaaz
    <div v-for="item in info" v-bind:key="item.key">
      {{ item }}
    </div>
    {{ info }}
    <router-link :to="{ name: 'PagesProfile', params: { id: $route.params.id } }">プロフィールページ</router-link>
    <router-link :to="{ name: 'PagesAbout', params: { id: $route.params.id } }">詳細ページ</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Pages',
    /* async asyncData(){
      const {data} = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
      return data
    }*/
    data(){
      return {
        info: null
      }
    },
    mounted() {
      this.setting()
    },
    methods: {
      setting: async function() {
        const res = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
        /* const item = JSON.parse("'"&res.data.results[0]&"'")*/
        /* this.info = items.address1 */
        this.info=res.data.results[0]
      }
    }
  }
</script>
