<template lang="html">
  <div class="container">
    <div  class="section">
      <item-list />
      <pos-input/>
    </div>
  </div>
</template>

<script>
//import auth from '~/plugins/auth'
import ItemList from '~/components/ItemList.vue'
import PosInput from '~/components/PosInput.vue'

export default {
  components: {
    ItemList,
    PosInput,
  },
  created() {
    const user = process.env.USERNAME;
    const pass = process.env.PASSWORD;
    this.$store.dispatch('INIT_AUTH', {user: user, pass: pass})
    this.$store.dispatch('INIT_ITEMS')
  },
  methods: {
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
