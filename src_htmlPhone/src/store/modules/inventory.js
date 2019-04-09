import PhoneAPI from './../../PhoneAPI'

const state = {
  inventory: []
}

const getters = {
  inventory: ({ inventory }) => inventory
}

const actions = {
  dropItem ({context}, { data }) {
    PhoneAPI.dropItem(data)
  },
  useItem ({context}, {name}) {
    PhoneAPI.useItem(name)
  },
  resetInventory ({ commit }) {
    commit('SET_INVENTORY', [])
  }
}

const mutations = {
  SET_INVENTORY (state, inventory) {
    state.inventory = inventory.sort((a, b) => a.display.localeCompare(b.display))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
state.inventory = [{
  identifier: 'steam:110000107cb978f',
  canRemove: true,
  count: 0,
  rare: false,
  name: 'water',
  usable: false,
  display: 'Water x 0'
}, {
  identifier: 'steam:110000107cb978f',
  canRemove: true,
  count: 5,
  rare: false,
  name: 'bread',
  usable: false,
  display: 'Bread x 5'
}, {
  identifier: 'steam:110000107cb978f',
  canRemove: true,
  count: 10,
  rare: false,
  name: 'redbull',
  usable: true,
  display: 'Redbull x 5'
}, {
  identifier: 'steam:110000107cb978f',
  canRemove: false,
  count: 10,
  rare: false,
  name: 'nonremovable',
  usable: true,
  display: 'Nonremovable x 5'
}]
}
