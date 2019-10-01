<template>
  <header class="row header p-4 d-flex justify-content-start flex-row">
    <Modal :show="showModal" @close="closeModal" />
    <img src="https://assets.website-files.com/5938780be60b2223c6c362fd/5971e9b249826a6c5672a208_logo-full.svg" width="220" alt="intricately" class="ml-3 mr-5">
    <div class="col-md-3 d-flex flex-row align-items-center justify-content-between">
      <span>
        <router-link to="/">
          HOME
        </router-link>
      </span>
      <button @click="setModal" class="header-btn p-2">NEW SMARTLIST</button>
      <button @click="redirect" class="header-btn p-2">     
        <router-link to="/notes">
          NOTES
        </router-link>
      </button>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/helpers/Modal'

export default {
  name: 'Header',
  components: {
    Modal
  },
  data: () => ({
    showModal: false,
    selected: 't1',
    items: [
      { title: 'COMPANY DATA', name: 't1' },
      { title: 'COMPANY TABLE', name: 't2' },
      { title: 'COMPANY PAGE', name: 't3' }
    ]
  }),
  methods: {
    setModal () {
      this.showModal = !this.showModal
    },
    closeModal () {
      this.showModal = !this.showModal
    },
    redirect () {
      this.$router.push('/notes')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    a {
      color: #fff;
    }
    background-color: #394783;
    &-btn {
      background-color: #5d699a;
      border-radius: 5px;
      border: none;
      color: #ffff; 
      outline-style: none;
      cursor: pointer;
      &:active {
        box-shadow: inset 0 0 1em #1d21249e, 0 0 1em #1d21243d;
      }
    }
  }
</style>