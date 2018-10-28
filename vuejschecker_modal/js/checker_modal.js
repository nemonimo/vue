Vue.component('modal-component', {
  template: `
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <p v-if="errorsmodal.length">
              <b>The errors in the input field are as follows !</b>
              <ul>
              <li v-for="errormodal in errorsmodal">{{ errormodal }}</li>
              </ul>
            </p>
            <button class="modal-default-button" v-on:click="$emit('click')">
              Close
            </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: ['errorsmodal']
})

const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    sex: null,
    showModal: false
  },
  methods: {
    checkForm: function(e) {
      this.errors = []
      if (this.name == null) {
        this.errors.push('Name field is blank.')
      } else if (!isNaN(this.name)) {
        this.errors.push('Do not put a number in the name field.')
      }

      if (this.age == null) {
        this.errors.push('Age field is blank.')
      } else if (isNaN(this.age)) {
        this.errors.push('Do not enter letters in the age field.');
      } else if (this.age < 0) {
        this.errors.push('Illegal number is entered in the age field.');
      }

      if (this.sex == null) {
        this.errors.push('Sex is mandatory for selection.')
      }

      e.preventDefault();
    }
  }
})
