<template>
<div>
  Hello nemonimoWorld !<br>
  Input your nickname !<br>
  <input type="text" v-model="inputNickname">
  <button v-on:click="applyNickname">apply</button>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      inputNickname: ''
    }
  },
  methods: {
    applyNickname() {
      this.$emit('hello-Customer', this.inputNickname)
    }
  }
}
</script>
