const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    sex: null,
  },
  methods: {
    checkForm: function(e) {
      this.errors = []
      if (this.name == null) {
        this.errors.push('名前欄が空欄です')
      } else if (!isNaN(this.name)) {
        this.errors.push('名前欄は文字を入力してください')
      }

      if (this.age == null) {
        this.errors.push('年齢欄が空欄です')
      } else if (isNaN(this.age)) {
        this.errors.push('年齢欄に数字を入力してください');
      } else if (this.age<0) {
        this.errors.push('年齢欄に不正な数字が入力されています');
      }

      if (this.sex == null) {
        this.errors.push('性別は選択必須です')
      }

      e.preventDefault();
    }
  }
})
