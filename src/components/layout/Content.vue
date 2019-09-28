<template>
  <main>
    <div class="content p-3">
      <Tabs :items="items" @onSelect="onSelect" :selected="selected">
        <Tab name="t1" :selected="selected">
          <div class="row content-item p-5 mt-5 text-center d-flex flex-column">
            <p class="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <input type="text" name="" id="" class="col-md-6">
            <input type="text" name="" id="" class="col-md-6">
            <input type="text" name="" id="" class="col-md-6">
            <input type="text" name="" id="" class="col-md-6">

            <label class="text-left mt-2">NOTES</label>
            <textarea 
              rows="8" 
              cols="80"
              placeholder="e.g Good Tech Company"
              v-model="textArea"
              class="p-2"
            >
            </textarea>
          </div>
        </Tab>
        <Tab name="t2" :selected="selected">
          <div class="content-item p-5 mt-5 text-center">
            <h3>2</h3>
            <div class="text-center">
            </div>
          </div>
        </Tab>
        <Tab name="t3" :selected="selected">
          <div class="content-item p-5 mt-5 text-center">
            <h3>3</h3>
            <div class="text-center">
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/layout/Tabs'
import Tab from '@/components/layout/Tab'

export default {
  name: 'Earn',
  components: {
    Tabs,
    Tab
  },
  data: () => ({
    selected: 't1',
    items: [
      { title: 'COMPANY DATA', name: 't1', img: 'bus-stop' },
      { title: 'COMPANY TABLE', name: 't2', img: 'bus' },
      { title: 'COMPANY PAGE', name: 't3', img: 'partner' }
    ]
  }),
  methods: {
    onSelect (selected) {
      this.selected = selected
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    min-height: 45rem;
    &-item {
      border: 1px solid #1d21242e;
      border-radius: 5px;
      input {
        margin: 15px 0;
      }
    }
    textarea {
      border-radius: 5px;
      outline-style: none;
      border: 1px #00000047 solid;
    }
  }
</style>