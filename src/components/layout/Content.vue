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
            <label class="text-left mt-5">COMPANY NAME</label>
            <input 
              type="text" 
              name="" 
              :class="$v.model.name.$dirty && $v.model.name.$invalid ? 'is-invalid' : ''"
              @focusout="$v.model.name.$touch()"
              id="" 
              class="col-md-6"
              placeholder="e.g. Your Company Name"
              v-model="model.name"
            >
            <Alert :v="$v.model.name" />

            <label class="text-left mt-4">COMPANY SPEND</label>
            <money 
              type="text" 
              name="" 
              :class="$v.model.spend.$dirty && $v.model.spend.$invalid ? 'is-invalid' : ''"
              id="" 
              class="col-md-6"
              placeholder="e.g. $150,000"
              v-model="model.spend"
              v-bind="money"
            >
            </money>
            <Alert :v="$v.model.spend" />

            <label class="text-left mt-4">COMPANY SPEND ABILITY</label>
            <money 
              type="text" 
              name="" 
              :class="$v.model.ability.$dirty && $v.model.ability.$invalid ? 'is-invalid' : ''"
              id="" 
              class="col-md-6"
              placeholder="e.g. $150,000 - $330,000"
              v-model="model.ability"
              v-bind="money"
            >
            </money>
            <Alert :v="$v.model.ability" />

            <label class="text-left mt-5">NOTES</label>
            <textarea 
              rows="8" 
              :class="$v.model.textArea.$dirty && $v.model.textArea.$invalid ? 'is-invalid' : ''"
              @focusout="$v.model.textArea.$touch()"
              cols="80"
              placeholder="e.g Good Tech Company"
              v-model="model.textArea"
              class="p-2"
            >
            </textarea>
            <Alert :v="$v.model.textArea" />

          </div>
        </Tab>
        <Tab name="t2" :selected="selected">
          <div class="content-item p-5 text-center">
            <h3>2</h3>
          </div>
        </Tab>
        <Tab name="t3" :selected="selected">
          <div class="content-item p-5 text-center">
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
import { Money } from 'v-money'
import Tab from '@/components/layout/Tab'
import Tabs from '@/components/layout/Tabs'
import Alert from '@/components/helpers/Alert'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Content',
  components: {
    Tabs,
    Tab,
    Alert,
    Money
  },
  data: () => ({
    selected: 't1',
    companyNotes: '',
    model: {
      name: '',
      spend: '',
      ability: '',
      textArea: ''
    },
    items: [
      { title: 'COMPANY DATA', name: 't1', img: 'bus-stop' },
      { title: 'COMPANY TABLE', name: 't2', img: 'bus' },
      { title: 'COMPANY PAGE', name: 't3', img: 'partner' }
    ],
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'e.g. $ ',
      precision: 2,
      masked: false
    }
  }),
  methods: {
    onSelect (selected) {
      this.selected = selected
    }
  },
    validations () {
    return {
      model: {
        name: {
          required
        },
        spend: {
          required
        },
        ability: {
          required
        },
        textArea: {
          required
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    min-height: 100vh;
    &-item {
      border: 1px solid #b4afb3;
      border-radius: 5px;
      label {
        color: #b4afb3;
      }
      input {
        border-radius: 5px;
        border: 1px #b4afb3 solid;
        padding: 0.5rem;
        outline-style: none;
      }
      .is-invalid {
        border: 1px #ff0000b5 solid;
      }
      ::placeholder {
        color: #b4afb38c;
        opacity: 1;
      }
    }
    textarea {
      border-radius: 5px;
      outline-style: none;
      border: 1px #b4afb3 solid;
    }
  }
</style>