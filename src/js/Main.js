import api from "../service/service.js"

export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
    }
  },
  methods: {
    login(user, pass) {
    },
    gouser(){
      this.$router.push('/user')
    },
    goapp () {
      this.$router.push('/app')
    },
    gorole(){
      this.$router.push('/role')
    },
    goper(){
      this.$router.push('/permission')
    }
    
  },
  mounted() {
    var Datauser = JSON.parse(localStorage.Datauser)
    console.log(Datauser.id)

  }
}
