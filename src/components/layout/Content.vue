<template>
  <main>
    <div class="content p-3">
     <div>
       {{ test }}
     </div>
    </div>
  </main>
</template>

<script>


export default {
  name: 'Content',
  data: () => ({
    test: 'inicializou o data()'
  }),
  beforeCreate() {
    this.test = 'inicializou beforeCreate()'
    console.log('inicializou beforeCreate()')
    // this._testFunc()
  },
  created() {
    this.test = 'inicializou created()'
    console.log('inicializou created()')
    this._testFunc()
  },
  beforeMount() {
    this.test = 'inicializou beforeMount()'
    console.log('inicializou beforeMount()')
  },
  mounted() {
    this.test = 'inicializou mounted()'
    console.log('inicializou mounted()')
  },
  methods: {
    _testFunc() {
      console.log('evento_teste')
      this.$emit('evento_teste')
    }
  },
  watch: {

  }

}
</script>

<style lang="scss" scoped>

</style>