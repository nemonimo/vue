<template>
  <div>
    <h1>サンプル</h1>
    <a href="https://www.google.co.jp/">{{smsg}}</a>
    <input type="button" v-bind:value="smsg" onClick="location.href='http://google.com'">
  </div>
</template>

<script>
module.exports={
  props:['smsg']
}
</script>

<style>
h1{
  color: blue;
}
</style>
