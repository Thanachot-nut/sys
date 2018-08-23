import api from "../service/service.js"

export default {
  name: "User",
  data() {
    return {
      user: "",
      pass: "",
      objuser: [],
      usercode: '',
      adduser: false,
      usercode_add: '',
      username_add: '',
      password_add: '',
      phone_add: ''
    }
  },
  methods: {
    getuser() {
      this.load()

      api.showalluser(this.usercode,
        (result) => {
          this.cload()
            console.log(result.status)
              this.objuser = result
            
          },
          (error) => {
            this.cload()
            var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
            M.toast({ html: toastHTML })
          })
      },
    load () {
      document.getElementById("loading").style.display = "block";
    },
    cload () {
      document.getElementById("loading").style.display = "none";
    },
    canceluser () {
      this.usercode_add = ''
      this.username_add = ''
      this.password_add = ''
      this.phone_add = ''
    },
    insertuser () {
      console.log('add User')
      this.load()
      var payload = {
        user_code: this.usercode_add,
        user_name: this.username_add,
        password: this.password_add,
        telephone: this.phone_add,
        profitcenter_id: 1,
        department_id: 1,
        expert_id: 1,
        creator_id: 1
          }
        console.log('payload : ' + JSON.stringify(payload))
        api.insert_user(payload,
          (result) => {
            this.cload()
            console.log(result.status)
            if (result.status === 'success') {
              console.log('insert :' + JSON.stringify(result))
              // console.log('Datauser'+localStorage.Datauser)
              // this.DataUser = result.data
              var toastHTML = '<span style="color:white">เพิ่ม User สำเร็จ </span>';
              M.toast({ html: toastHTML })
              // this.$router.push('/index')
              this.usercode_add = ''
              this.username_add = ''
              this.password_add = ''
              this.phone_add = ''
            }
          },
          (error) => {
            var toastHTML = '<span style="color:white;font-weight:bold">ไม่สามารถติดต่อเซิฟเวอร์ได้</span>';
            M.toast({ html: toastHTML });
            this.cload()
          })
    },
    openadduser(){
      if(this.adduser == false){
        this.adduser = true
      }else if(this.adduser == true){
        this.adduser = false
      }
    //  this.adduser = false
    },
    showall() {
      // alert('33')
      this.load()
      api.showalluser(this.usercode,
        (result) => {
          this.cload()
              console.log('Search showall :' + JSON.stringify(result))
              this.objuser = result
              console.log(JSON.stringify(this.objuser))
                  // var toastHTML = '<span style="color:white">ค้นหา ' + usercode + ' สำเร็จ </span>';
                  // M.toast({ html: toastHTML })
      
          },
          (error) => {
            this.cload()
            var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
            M.toast({ html: toastHTML })
          })
      },
      changestatus(val){
        var x;
        if(val == 1){
          x = 'Available'
          return x
        }else if(val == 0){
          x = 'Not Available'
          return x
        }
      },
      status0(val){
        console.log('on app'+JSON.stringify(val))
        this.load()
        var payload = {
          user_code : val.user_code,
          active_status : 1,
          editor_id: val.editor_id,
          id: val.id
        }
        console.log(JSON.stringify(payload))
        api.changestatususer(payload,
          (result) => {
            this.cload()
            if (result.status == 'success') {
              console.log('resultchange :' + JSON.stringify(result))
              // console.log('Datauser'+localStorage.Datauser)
              // this.DataUser = result.data
              var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ Success !!!</span>';
              M.toast({ html: toastHTML });
              this.showall()
            }
          },
          (error) => {
            var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
            M.toast({ html: toastHTML });
            this.cload()
          })
  
      },
      status1(val){
        console.log('on app'+JSON.stringify(val))
        this.load()
        var payload = {
          user_code : val.user_code,
          active_status : 0,
          editor_id: val.editor_id,
          id: val.id
        }
        console.log(JSON.stringify(payload))
        api.changestatususer(payload,
          (result) => {
            this.cload()
            if (result.status == 'success') {
              console.log('resultchange :' + JSON.stringify(result))
              // console.log('Datauser'+localStorage.Datauser)
              // this.DataUser = result.data
              var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ Success !!!</span>';
              M.toast({ html: toastHTML });
              this.showall()
            }
          },
          (error) => {
            var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
            M.toast({ html: toastHTML });
            this.cload()
          })
      }
  },
  mounted () {
             this.showall()
  }
}
