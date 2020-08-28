// components/ItenList.vue

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
        <th>
          <a class="button" @click="on_add"><span class="icon is-large has-text-success"><i class="fa fa-plus-circle"></i></span></a>
        </th>
      </tr>
      <tr v-for="item in items" :key="item['.key']">
        <td>{{item.sp}}</td>
        <td>{{item.ep}}</td>
        <td>{{item.sl}}</td>
        <td>{{item.ts}}</td>
        <td>{{item.type}}</td>
        <td>{{item.vol}}</td>
        <td>
          <a class="button" @click="on_pencil(item['.key'])"><span class="icon"><i class="fa fa-pencil"></i></span></a>
          <a class="button" @click="on_trash(item['.key'])"><span class="icon"><i class="fa fa-trash"></i></span></a>
        </td>
      </tr>
    </table>
    <div class="has-text-info">
        {{numOfItems}} items
    </div>

  </div>
</template>

<script>
import eventHub from '~/plugins/event-hub'
import { mapState } from 'vuex';

export default {
  name: 'ItemList',
  computed: mapState({
      items: state => state.items,
      numOfItems: state => Object.keys(state.items).length
  }),
  methods: {
    on_add() {
      eventHub.$emit('activeInput', null)
    },
    on_pencil(key) {
      eventHub.$emit('activeInput', key)
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
.table {
  margin-bottom: 0;
}
</style>
