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
            <input 
              type="text" 
              name="" 
              :class="$v.model.spend.$dirty && $v.model.spend.$invalid ? 'is-invalid' : ''"
              @focusout="$v.model.spend.$touch()"
              id="" 
              class="col-md-6"
              placeholder="e.g. $150,000"
              v-model="model.spend"
              @blur="currencySpend(model.spend, 2)"
              @focus="clearSpend()"
            >
            <Alert :v="$v.model.spend" />

            <label class="text-left mt-4">COMPANY SPEND ABILITY</label>
            <div class="ability d-flex flex-column justufy-content-start">
              <input 
                type="text" 
                name="" 
                :class="$v.model.ability.$dirty && $v.model.ability.$invalid || spanAlert ? 'is-invalid' : ''"
                @focusout="$v.model.ability.$touch()"
                id="" 
                class="col-md-6"
                placeholder="e.g. $150,000 - $330,000"
                v-model="model.ability"
                @blur="currencyAbility(model.ability, 2)"
                @focus="clearAbility()"
              >
              <span v-if="spanAlert" class="span-alert">COMPANY EXPENSES MUST BE LESS THAN SPEND ABILITY</span>
              <Alert :v="$v.model.ability" />
            </div>

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
import Tab from '@/components/layout/Tab'
import Tabs from '@/components/layout/Tabs'
import Alert from '@/components/helpers/Alert'
import { required } from 'vuelidate/lib/validators'
import { currencyFormat } from '@/helpers/utils'

export default {
  name: 'Content',
  components: {
    Tabs,
    Tab,
    Alert
  },
  data: () => ({
    spanAlert: false,
    selected: 't1',
    companyNotes: '',
    model: {
      name: '',
      spend: '',
      ability: '',
      textArea: ''
    },
    items: [
      { title: 'COMPANY DATA', name: 't1' },
      { title: 'COMPANY TABLE', name: 't2' },
      { title: 'COMPANY PAGE', name: 't3' }
    ]
  }),
  methods: {
    clearSpend () {
      this.model.spend = Number(this.model.spend.replace(/\./g, '').replace(',', '.'))
    },
    clearAbility () {
      this.model.ability = Number(this.model.ability.replace(/\./g, '').replace(',', '.'))
    },
    currencySpend(value, toFixed) {
      if (!this.model.spend) return
      const formatSpend = currencyFormat(value, toFixed)
      this.model.spend = formatSpend
    },
    currencyAbility(value, toFixed) {
      if (!this.model.ability) return
      const formatAbility = currencyFormat(value, toFixed)
      this.model.ability = formatAbility
    },
    onSelect (selected) {
      this.selected = selected
    },
    currencyFormat (value, toFixed) {
      return currencyFormat(value, toFixed)
    }
  },
  watch: {
    'model.ability': function () {
      const { spend, ability } = this.model
      const newSpend = Number(spend.replace(/\./g, '').replace(',', '.'))
      const newAbility = Number(ability.replace(/\./g, '').replace(',', '.'))
      if (newAbility < newSpend) this.spanAlert = true
      if (newAbility >= newSpend) this.spanAlert = false
      if (!newAbility) this.spanAlert = false
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
    .ability {
      position: relative;
      .span-alert {
        position: absolute;
        left: 0;
        color: #ff0000b5;
        top: 38px;
      }
    }
  }
</style>