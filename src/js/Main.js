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
    
  },
  mounted() {
  }
}
