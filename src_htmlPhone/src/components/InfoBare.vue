<template>
  <div class='phone_infoBare barre-header'>
    <span class="time">
      <current-time></current-time>
    </span>
    <hr class = "batterie1">
    <hr class = "batterie2">
    <hr class = "barre1">
    <hr class = "barre2">
    <hr class = "barre3">
    <hr class = "barre4">
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CurrentTime from './CurrentTime'
export default {
  computed: mapGetters(['config']),
  components: {
    CurrentTime
  }
}
</script>
<style scoped>
.barre-header {
    height: 24px;
    font-size: 17px;
    line-height: 24px;
    padding: 0px 20px 0px 24px;
    width: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
}
.barre-header hr {
    position: absolute;
    display: inline-block;
}
.barre1 {
    height: 12px;
    width: 3px;
    right: 48px;
    background-color: rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    border: none;
    bottom: -3px;
}
.barre2 {
    height: 9px;
    width: 3px;
    right: 53px;
    background-color: white;
    border: none;
    bottom: -3px;
}
.barre3 {
    height: 6px;
    width: 3px;
    right: 58px;
    background-color: white;
    border: none;
    bottom: -3px;
}
.barre4 {
    height: 3px;
    width: 3px;
    right: 63px;
    background-color: white;
    border: none;
    bottom: -3px;
}
.time{
    text-align: left;
    float: left;
    padding-right: 12px;
}


.batterie1 {
    height: 10px;
    width: 7px;
    right: 35px;
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    border-radius: 0.5px;
    border: none;
    bottom: -3px;
}
.batterie2 {
    height: 13px;
    width: 5px;
    right: 36px;
    bottom: -2px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 0.5px solid white;
    border-radius: 1px;
}
</style>
