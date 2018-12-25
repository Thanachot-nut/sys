import api from "../service/service.js"
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      user: "",
      pass: "",
      isLoading: false,
      fullPage: true,
    }
  },
  components: {
    Loading
},
  methods: {
    
    login() {
      this.isLoading = true;
      setTimeout(() => {
      api.signin(this.user, this.pass,
        (result) => {
          this.isLoading = false;
          this.cload()
          console.log(result.status)
          if (result.status == 'success') {
            
            console.log('login :' + JSON.stringify(result))
            localStorage.Datauser = JSON.stringify(result.data)
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">Login success</span>';
            M.toast({ html: toastHTML });
            this.$router.push('/index')
          }
        },
        (error) => {
          this.isLoading = false;
          var toastHTML = '<span style="color:white;font-weight:bold">Username or Password Wrong !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
      },3000);
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
