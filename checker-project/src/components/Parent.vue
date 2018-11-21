<template>
<div class="hello">
  <h1>
    Welcome nemonimoWorld !<br>
    Input your nickname !<br>

  <div v-if="!showText">
    <input type="text" v-model="inputNickname">
  </div>
  <div v-else>
    <input type="text" v-model="inputNickname" disabled>
  </div>
    <button v-show="!showText" v-on:click="toggle">Decision !</button>
    <button v-on:click="checkForm">Check</button>
    {{errors}}
  </h1>
  <hr>
  <h2 v-show="showText">
    <router-view name="child" v-bind:inputNickname="inputNickname" v-on:modalPopUpEvent="modalPopUpEvent" />
  </h2>

<div v-if="showModal">
<router-view name="modal" v-on:modalPopUpEvent="modalPopUpEvent"/>
</div>

</div>
</template>

<script>
export default {
  data () {
    return {
      inputNickname: null,
      showText: false,
      showModal: false,
      errors: []
    }
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText
    },
    modalPopUpEvent: function () {
      this.showModal = !this.showModal
    },
    checkForm: function () {
      this.errors = []
      if (this.inputNickname == null) {
        this.errors.push('Name field is blank.')
      } else if (!isNaN(this.inputNickname)) {
        this.errors.push('Do not put a number in the name field.')
      }
    }
  }
}
</script>
