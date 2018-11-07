<template>
<div>
  Hi, {{inputNickname}} !<br>
  I have a few questions.<br>
  If you all clear, you may be happy !
  <br><br>
  Question.1 tell me how you are like.
  <p>
    <label>Age</label>
    <input v-model="age">years old
  </p>

  <p>
    <label>Sex</label>
    <input type="radio" name ="sex" value="male" v-model="sex">
    <label for="male">Male</label>
    <input type="radio" name ="sex" value="female" v-model="sex">
    <label for="female">Female</label>
  </p>

  <p>
    <label>Favorite food</label>
    <input v-model="favoriteFood" type="text">
  </p>
</div>
</template>

<script>
module.exports={
  props:['inputNickname']
}
</script>
