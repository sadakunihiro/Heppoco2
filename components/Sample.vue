// components/Sample.vue
<template lang="html">
  <div class="box">
    <table class="table is-narrow is-hoverable is-fullwidth">
      <tr>
        <th>Start Price</th>
        <th>Exit Price</th>
        <th>Stop Loss</th>
        <th>Trailing Stop</th>
        <th>Type</th>
        <th>Volume</th>
        <th><a class="button" @click="on_add"><span class="icon is-large has-text-success"><i class="fa fa-plus-circle"></i></span></a></th>
      </tr>
      <tr v-for="item in items" :key="item['.key']">
        <td>{{item.sp}}</td>
        <td>{{item.ep}}</td>
        <td>{{item.sl}}</td>
        <td>{{item.ts}}</td>
        <td>{{item.type}}</td>
        <td>{{item.vol}}</td>
        <td>
          <a class="button" @click="on_pencil(item)"><span class="icon"><i class="fa fa-pencil"></i></span></a>
          <a class="button" @click="on_trash(item['.key'])"><span class="icon"><i class="fa fa-trash"></i></span></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'sample',
  data() {
    return {
    }
  },
  computed: mapState(['items']),
  methods: {
    on_add() {
      this.$emit('activeInput', null)
    },
    on_pencil(item) {
      this.$emit('activeInput', item)
    },
    async on_trash(key) {
      await this.$store.dispatch('DEL_RECORD', key)
    },
  }
};
</script>

<style>
.box {
  margin: 10px;
}
.button {
  border-width: 0;
}
</style>