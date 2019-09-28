<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Content from './layout/Content.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Content
  }
}
</script>