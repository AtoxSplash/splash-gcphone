<template>
  <div class="phone_app">
    <PhoneTitle title="Twitter" backgroundColor="#38A1F3" />
    <div class="phone_content">
      <div class="elements" ref="elementsDiv">
        <div class='twitter_write'>
          <input type="text" id="inputElement" placeholder="What's happening?">
          <span class='twitter_send'>Tweet</span>
        </div>

        <div class="element" v-for='(elem) in twitterMessages' 
          v-bind:key="elem.id"
          >
          <div class="topBar">
            <div class="twtname">
              {{elem.handle}}
            </div>
            <timeago class="time" :since='elem.time' :auto-update="20"></timeago>
          </div>
          <div class="message">
            {{elem.message}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PhoneTitle from './../PhoneTitle'

export default {
  components: { PhoneTitle },
  data () {
    return {
      currentSelect: 0
    }
  },
  computed: {
    ...mapGetters(['twitterMessages'])
  },
  methods: {
    init () {
      this.twitterSetMessages()
    },
    ...mapActions(['twitterSendMessage', 'twitterSetMessages']),
    scrollIntoViewIfNeeded () {
      this.$nextTick(() => {
        this.$el.querySelector('.select').scrollIntoViewIfNeeded()
      })
    },
    onUp () {
      const c = this.$refs.elementsDiv
      c.scrollTop = c.scrollTop - 120
    },
    onDown () {
      const c = this.$refs.elementsDiv
      c.scrollTop = c.scrollTop + 120
    },
    async onEnter () {
      const rep = await this.$phoneAPI.getReponseText()

      if (rep !== undefined && rep.text !== undefined) {
        const message = rep.text.trim()
        if (message.length !== 0) {
          this.twitterSendMessage({
            message
          })
        }
      }
    },
    onBack () {
      this.$router.push({ name: 'home' })
    },
    formatTime (time) {
      const d = new Date(time)
      return d.toLocaleTimeString()
    }
  },
  created: function () {
    this.$bus.$on('keyUpArrowDown', this.onDown)
    this.$bus.$on('keyUpArrowUp', this.onUp)
    this.$bus.$on('keyUpEnter', this.onEnter)
    this.$bus.$on('keyUpBackspace', this.onBack)
    this.init()
  },
  mounted () {
    window.c = this.$refs.elementsDiv
    const c = this.$refs.elementsDiv
    c.scrollTop = c.scrollHeight
  },
  beforeDestroy: function () {
    this.$bus.$off('keyUpArrowDown', this.onDown)
    this.$bus.$off('keyUpArrowUp', this.onUp)
    this.$bus.$off('keyUpEnter', this.onEnter)
    this.$bus.$off('keyUpBackspace', this.onBack)
  }
}
</script>

<style scoped>

.elements{
  height: 100%;
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* margin-bottom: 15px; */
  margin-left: 15px;
  margin-right: 15px;
}

.element{
  color: #a6a28c;
  flex: 0 0 auto;
  width: 100%;
  display: block;
  border-bottom: 1px solid #e6ecf0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(230, 236, 240);
  margin-bottom: 7.5px;
}

.topBar {
  display: inline-flex;
  flex-direction: row;
  padding-bottom: 5px;
  width: 100%
}

.time{
  padding-right: 6px;
  font-size: 12px;
  text-align: right;
  float: rigth;
  width: 50%
}

.message{
  width: 100%;
  color: black;
  font-size: 18px;
  padding-bottom: 7.5px;
}

.twtname {
  width: 100%;
  color: black;
  font-size: 16px;
}

.twitter_write{
  height: 56px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.twitter_write input{
  width: 75%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 3px 5px;
  float: left;
  height: 36px;
  background-color: #ffffff;
  color: white;
  border: 1px solid #e6ecf0;
  border-top-color: rgb(230, 236, 240);
  border-top-style: solid;
  border-top-width: 1px;
  border-right-color: rgb(230, 236, 240);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgb(230, 236, 240);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 236, 240);
  border-left-style: solid;
  border-left-width: 1px;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
.twitter_write input::placeholder {
  color: #ccc;
}
.twitter_send{
  width: auto;
  height: 32px;
  float: right;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  background-color: #4AB3F4;
  margin-left: 12px;
  margin-bottom: 2px;
  padding: 6px 16px;
  color: white;
  line-height: 22px;
  text-align: center;
}
.elements::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #ffffff;
}
.elements::-webkit-scrollbar
{
  width: 3px;
  background-color: transparent;
}
.elements::-webkit-scrollbar-thumb
{
  background-color: #C1C1C1;
}
</style>
