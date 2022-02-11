<template>
  <div>
    {{ readersNumber }}
    {{ book.title }}
    {{ name }}
  </div>
</template>
<script>
  import {defineComponent, ref, reactive, onMounted} from 'vue'

  export default defineComponent({
    name: 'Name',
    setup() {
      const readersNumber = ref(0)
      const book = reactive({title: 'vue 3'})

      const name = ref('John')

      //methods
      const doIt = () => console.log(`Hello ${name.value}`)

      onMounted(()=>{
        doIt();
      })
      return {
        readersNumber,
        book,
        name
      }
    }
  })
</script>
