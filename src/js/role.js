import api from "../service/service.js"

export default {
  name: "role",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      roleobj:[],
      searchrole:'',
      rolecode:'',
      rolename:'',
      roledescrip:'',
    }
  },
  methods: {
    showroleall() {
      this.load()
      api.showrolealls(this.searchrole,
        (result) => {
          this.cload()
          console.log(result.status)
          if (result.status == 'success') {
            // console.log('login :' + JSON.stringify(result))
            this.roleobj = result.data
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    load(){
      document.getElementById("loading").style.display = "block";
    },
    cload(){
      document.getElementById("loading").style.display = "none";
    },
    addrole(){
      var payload = {
        role_code: this.rolecode,
        role_name: this.rolename,
        description: this.roledescrip,
        active_status:1,
        creator_id:1
      }
      console.log('payload result : '+JSON.stringify(payload))
    },
    changestatus(val){
      var x;
      if(val == 1){
        var x = 'Running'
        return x
      } else if(val == 0){
        var x = 'Not Running'
        return x
      }
    },
    onrole(val,status){
      console.log('on app'+JSON.stringify(val))
      // {"editor_id":1,"id":7}
      if(status == true){
        status = 0
      }else if(status == false){
        status = 1
      }
      this.load()
      var payload = {
        role_code : val.role_code,
        role_name : val.role_name,
        description: val.description,
        active_status: status,
        editor_id: val.editor_id,
        id:val.id
      }
      
      console.log(JSON.stringify(payload))
      api.changestatusrole(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ !!!</span>';
            M.toast({ html: toastHTML });
            this.showroleall()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
  
    },
    // {"role_code":"test2","role_name":"test","description":"test2","active_status":1,"editor_id":1,"id":7}
    turnoffapp(val){
      console.log('on app'+JSON.stringify(val))
      // {"editor_id":1,"id":7}
      this.load()
      var all = new Date()
      var payload = {
        role_code : val.role_code,
        role_name : val.role_name,
        description: val.description,
        active_status: 0,
        editor_id: 1,
        id:val.id
      }
      console.log(JSON.stringify(payload))
      api.changestatusrole(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ !!!</span>';
            M.toast({ html: toastHTML });
            this.showroleall()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    }
  },

  mounted() {
     this.showroleall()
  }
}
