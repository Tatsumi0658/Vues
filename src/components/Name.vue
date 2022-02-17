<template>
  <div>
    {{ readersNumber }}
    {{ book.title }}
    {{ name }}
    <ul>
      <li v-for="item in res.data">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
  import {defineComponent, ref, reactive, onMounted} from 'vue'
  import axios from 'axios'

  export default defineComponent({
    name: 'Name',
    setup() {
      const readersNumber = ref(0)
      const book = reactive({title: 'vue 3'})

      const name = ref('volt')

      const res = reactive({data:null})

      //methods
      const doIt = () => console.log(`Hello ${name.value}`)

      async function getInfo(){
        const dt = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
        console.log(dt)
        res.data = dt.data.results[0]
      }

      onMounted(()=>{
          doIt(),
          getInfo()
      })

      return {
        readersNumber,
        book,
        name,
        ...actionConsole(book.title),
        res
      }
    },
  })

  function actionConsole(x){
    console.log(`Hello ${x}`)
  }


  /* async function getInfo(){
    const res = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060')
    return res
  } */
</script>
