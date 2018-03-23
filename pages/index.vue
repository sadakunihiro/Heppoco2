<template lang="html">
  <div class="container">
    <!-- <div id="add_button">
      <button id="add-button" class="button is-primary" @click="isActive=true">追加</button>
    </div> -->
    <div  class="section">
      <sample @activeInput="active_input"/>
      <pos-input v-bind:class="{ 'is-active': isActive }" :item="item" @close="isActive=false"/>
    </div>
  </div>
</template>

<script>
//import auth from '~/plugins/auth'
import Sample from '~/components/Sample.vue'
import PosInput from '~/components/PosInput.vue'

export default {
  components: {
    Sample,
    PosInput,
  },
  data() {
    return {
      isActive: false,
      item: {sp:"0.0",ep:"0.0",sl:"0.0",ts:true,type:'L',vol:"10"},
    }
  },
  created() {
    const user = process.env.USERNAME;
    const pass = process.env.PASSWORD;
    this.$store.dispatch('INIT_AUTH', {user: user, pass: pass})
    this.$store.dispatch('INIT_ITEMS')
  },
  methods: {
    active_input(item) {
      this.item = item? item:{sp:"0.0",ep:"0.0",sl:"0.0",ts:true,type:'L',vol:"10"}
      this.isActive = true
      console.log('click', item)
    }
  },
}
</script>

<style>
#add-button {
  position: absolute;
  top: 32px;
  left: 15px;
}
</style>
