<template lang="html">
    <div class="modal" >
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Input Rule</p>
          <button class="delete" aria-label="close" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">

        <div class="field is-horizontal">
          <label class="label field-label">Start price</label>
          <div class="control field-body">
            <input class="input" type="number" id="sp" value="0.0" v-model="item.sp" maxlength="6" size="6"/>
          </div>
        </div>
        
        <div class="field is-horizontal">
          <label class="label field-label">Exit Price </label>
          <div class="control field-body">
            <input class="input" type="number" id="ep" value="0.0" v-model="item.ep"/>
          </div>
        </div>

        <div class="field is-horizontal">
          <label class="label field-label">Stop Loss</label>
          <div class="control field-body">
            <input class="input" type="number" id="sl" value="0.0" v-model="item.sl"/>
          </div>
        </div>

        <div class="field is-horizontal">
          <label class="label field-label"> Trailing Stop? </label>
          <div class="control field-body">
            <label class="checkbox">
              <input type="checkbox" name="trail" v-model="item.ts">
            </label>
          </div>
        </div>
        
        <div class="field is-horizontal">
          <label class="label field-label">Long/Short</label>
          <div class="control field-body">
            <label class="radio">
              <input type="radio" name="question" v-model="item.type" value="L">Long
            </label>
            <label class="radio">
              <input type="radio" name="question" v-model="item.type" value="S">Short
            </label>
          </div>
        </div>

        <div class="field is-horizontal">
          <label class="label field-label">Volume</label>
          <div class="control field-body">
            <input class="input" type="number" id="vol" value="0.0" v-model="item.vol"/>
          </div>
        </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="save">Save</button>
          <button class="button" @click="$emit('close')">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "PosInput",
  props: ['item'],
  methods: {
    async save() {
      const key = this.item['.key']
      delete this.item['.key']
      await this.$store.dispatch(key? 'MOD_RECORD':'ADD_RECORD', {key:key, item:this.item})
      this.$emit('close')
    }
  }
};
</script>

<style>
.card {
  width: 50%
}
</style>
