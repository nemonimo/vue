<template>
<div>
  <errorCheckHeader /><hr>
  <errorCheckBody /><hr>
  <errorCheckFooter />
  <hr>
  <bheader v-bind:hmsg="msg" v-on:apply-from-child="apply"></bheader>
  <sample v-bind:smsg="msg"></sample>
  <p v-if="msg.length > 0">
    {{msg}}
  </p>
  <p v-else>
    no text
  </p>
  <input type="text" v-model="msg">
  <button @click="clear()">clear</button>
  {{messageFromChild}}
  <HelloWorld></HelloWorld>
</div>
</template>

<script>
import errorCheckHeader from './components/errorCheckHeader'
import errorCheckBody from './components/errorCheckBody'
import errorCheckFooter from './components/errorCheckFooter'
import bheader from './components/bheader'
import sample from './components/sample'
import HelloWorld from './components/HelloWorld'

export default {
  components: {
    'errorCheckHeader': errorCheckHeader,
    'errorCheckBody': errorCheckBody,
    'errorCheckFooter': errorCheckFooter,
    'bheader': bheader,
    'sample': sample,
    'HelloWorld': HelloWorld
  },
  data() {
    return {
      msg: 'Hello World!',
      smsg: '',
      hmsg: '',
      messageFromChild: 'message from child',
    }
  },
  methods: {
    clear() {
      this.msg = 'no text'
    },
    apply(value) {
      this.messageFromChild = value
    }
  }
}
</script>
