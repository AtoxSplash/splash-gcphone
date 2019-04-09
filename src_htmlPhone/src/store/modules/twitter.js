import PhoneAPI from './../../PhoneAPI'

let TwitterAudio = null

const state = {
  twitterMessages: []
}

const getters = {
  twitterMessages: ({ twitterMessages }) => twitterMessages
}

const actions = {
  twitterSetMessages ({ state, commit, dispatch }) {
    commit('TWITTER_SET_MESSAGES', { messages: [] })

    dispatch('twitterGetMessage')
  },
  twitterAddMessage ({ state, commit, getters }, { message }) {
    if (TwitterAudio !== null) {
      TwitterAudio.pause()
      TwitterAudio = null
    }

    TwitterAudio = new Audio('/html/static/sound/tchatNotification.ogg')
    TwitterAudio.volume = getters.volume
    TwitterAudio.play()

    commit('TWITTER_ADD_MESSAGES', { message })
  },
  twitterGetMessage ({ commit }) {
    PhoneAPI.twitterGetMessage()
  },
  twitterSendMessage (state, { message }) {
    PhoneAPI.twitterSendMessage(message)
  },
  twitterDeleteMsg ({ state, commit, getters }, string) {
    var stringToDelete = string['1']

    commit('TWITTER_DELETE_MESSAGES', stringToDelete)
  }
}

const mutations = {
  TWITTER_ADD_MESSAGES (state, { message }) {
    state.twitterMessages.unshift(message)
  },
  TWITTER_SET_MESSAGES (state, { messages }) {
    state.twitterMessages = messages
  },
  TWITTER_DELETE_MESSAGES (state, stringToDelete) {
    for (var i = state.twitterMessages.length; i--;) {
      if (state.twitterMessages[i]['handle'].toLowerCase() === stringToDelete.toLowerCase() || state.twitterMessages[i]['identifier'].toLowerCase() === stringToDelete.toLowerCase()) {
        state.twitterMessages.splice(i, 1)
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

if (process.env.NODE_ENV !== 'production') {
  state.currentChannel = 'debug'
  state.twitterMessages = JSON.parse('[{"channel":"teste","message":"teste","id":6,"time":1528671680000},{"channel":"teste","message":"Hop","id":5,"time":1528671153000}]')
  for (let i = 0; i < 200; i++) {
    state.twitterMessages.push(Object.assign({}, state.twitterMessages[0], { id: 100 + i, message: 'mess ' + i }))
  }
  state.twitterMessages.push({
    message: 'This is a very long sentence to test out the line break will go to the next line and if it looks okay to test out this twitter app',
    handle: '@Test',
    id: 5000,
    time: new Date().getTime()
  })
  state.twitterMessages.push({
    message: 'Message sur plusieur ligne car il faut bien !!! Ok !',
    handle: '@Test',
    id: 5000,
    time: new Date().getTime()
  })
  state.twitterMessages.push({
    message: 'Message sur plusieur ligne car il faut bien !!! Ok !',
    handle: '@Test',
    id: 5000,
    time: new Date(4567845).getTime()
  })
}
