<template>
<div>
  <p>{{hmsg}}</p>
  <input v-model:value="hmsg">
  <input type="text" v-model="childMessage"></input>
  <button @click="apply">apply</button>
</div>
</template>

<script>
module.exports = {
  props: ['hmsg'],
  data(){
    return{
      childMessage:''
    }
  },
  methods:{
    apply(){
      this.$emit('apply-from-child',this.childMessage)
    }
  }
}
</script>

<style>
p {
  color: yellow;
}
</style>
