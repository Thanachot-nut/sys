import api from "../service/service.js"

export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: "",
      pass: "",
    }
  },
  methods: {
    login(user, pass) {
      this.load()
      api.signin(this.user, this.pass,
        (result) => {
          this.cload()
          console.log(result.status)
          if (result.status == 'success') {
            console.log('login :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">Login success</span>';
            M.toast({ html: toastHTML });
            this.$router.push('/index')
            this.user = ''
            this.pass = ''
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">Username or Password Wrong !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()

        })
    },
    load(){
      document.getElementById("loading").style.display = "block";
    },
    cload(){
      document.getElementById("loading").style.display = "none";
    }
  },
  mounted() {
      // var toastHTML = '<span style="color:white">Login success</span>';
      //       M.toast({ html: toastHTML });
  }
}
