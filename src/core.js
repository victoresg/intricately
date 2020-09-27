import Vue from 'vue'
import Vuelidate from 'vuelidate'
import money from 'v-money'

import 'vue-loading-overlay/dist/vue-loading.css'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

export default {
  inject: () => {
    Vue.use(Vuelidate)
    Vue.use(money, { precision: 4 })
  }
}
