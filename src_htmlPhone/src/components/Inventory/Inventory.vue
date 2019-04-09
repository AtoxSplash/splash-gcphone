<template>
  <div class="inventory">
    <list :list='linventory' title="Inventory" v-on:select="onSelect"></list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  // import { generateColorForStr } from '@/Utils'
  import List from './../List.vue'

  export default {
    components: {
      List
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['inventory']),
      linventory: function () {
        return this.inventory
      }
    },
    methods: {
      onSelect: function (item) {
        if (item.count > 0) {
          this.$router.push({path: '/item/' + item.name})
        }
      },
      back: function () {
        this.$router.push({ name: 'home' })
      }
    },
    created: function () {
      this.$bus.$on('keyUpBackspace', this.back)
    },

    beforeDestroy: function () {
      this.$bus.$off('keyUpBackspace', this.back)
    }
  }
</script>

<style scoped>
.inventory{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.title{
  padding-left: 16px;
  height: 34px;
  line-height: 34px;
  font-weight: 700;
  background-color: #5264AE;
  color: white;
}
.elements{
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  height: 100%;
}
</style>
