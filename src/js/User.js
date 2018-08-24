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
      phone_add: '',
      page:0,
      prevpage: 0,
      nextpage: 25,
      coloractive:'',
      activeItem:0,
    }
  },
  methods: {
    // prevpageb () {
    //   if(this.activeItem > 0){
    //     this.activeItem--
    //   }
      
    //   if (this.prevpage <= 0 || this.nextpage <= 25) {
    //     this.prevpage = 0
    //     this.nextpage = 25
    //     this.showall()
    //   } else {
    //     this.prevpage -= 25
    //     this.nextpage -= 25
    //     this.showall()
    //   }
    // },
    // nextpageb () {
    //   this.activeItem++
    //   this.prevpage += 25
    //   this.nextpage += 25
    //   this.showall()
    // },
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
              // console.log('Search showall :' + JSON.stringify(result))
              console.log('result length ::' +result.length)
              var page = (result.length)/25
            console.log('page :'+page)
            this.page = parseInt(page)+1
            
              this.objuser = result.slice(this.prevpage, this.nextpage)

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
      },
      clickpage(val){
        this.coloractive = val

        this.activeItem = val;
      var numpage = (val);
      var result = 25*numpage
      console.log(result)
      this.prevpage = 0 + result,
      this.nextpage = 25 + result,
      this.showall()
     // console.log('activeitem : '+this.activeItem)

      }
  },
  mounted () {
    this.coloractive = 0
             this.showall()
  }
}
