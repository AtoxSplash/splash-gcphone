import Vue from 'vue'
import Vuex from 'vuex'

import phone from './modules/phone'
import contacts from './modules/contacts'
import inventory from './modules/inventory'
import twitter from './modules/twitter'
import messages from './modules/messages'
import appels from './modules/appels'
import bank from './modules/bank'
import tchat from './modules/tchat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    phone,
    contacts,
    messages,
    appels,
    bank,
    tchat,
    inventory,
    twitter
  },
  strict: true
})
