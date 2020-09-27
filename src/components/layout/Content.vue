<template>
  <main>
    <div class="content p-3">
     <div>
       olá
     </div>
    </div>
  </main>
</template>

<script>


export default {
  name: 'Content',
  data: () => ({

  }),
  beforeCreate() {
    alert('beforeCreate')
  },
  created() {
    alert('created')
  },
  beforeMount() {
    alert('beforeMount')
  },
  mounted() {
    alert('mounted')
  },
  methods: {

  },
  watch: {

  }

}
</script>

<style lang="scss" scoped>

</style>