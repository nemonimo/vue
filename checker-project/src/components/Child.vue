<template>
<div>
  Hi, {{inputNickname}} !<br>
  I have a few questions.
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

  <button @click="modalPopUp">Check</button>

</div>
</template>

<script>
export default {
  data () {
    return {
      age: '',
      sex: '',
      favoriteFood: ''
    }
  },
  props: [
    'inputNickname'
  ],
  methods: {
    modalPopUp: function () {
      this.$emit('modalPopUpEvent')
    }
  }
}
</script>
