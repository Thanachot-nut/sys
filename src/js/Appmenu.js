import api from "../service/service.js"
if (localStorage.Datauser) {
  var Datauser = JSON.parse(localStorage.Datauser)
}
export default {
  name: "App",
  data() {
    return {
      user: "",
      pass: "",
      value: "",
      contentobj: [],
      colorstatus: '',
      bg: '',
      searchi: '',
      appcodec: '',
      appnamec: '',
      detailc: '',
      contentmodal: [],
      topicmodal: '',
      sendobj: [],
      toggleaddmenu: 0,
      addmenucode: '',
      addmenuname: '',
      addmenudescription: '',
      showeditapp: false,
      app_code: '',
      app_name: '',
      description: '',
      edit_id:'',
      showeditmenu:false,
      menu_code :'',
      menu_name :'',
      menu_description :'',
      app_id  : '', 
      idid : '',
    }
  },
  methods: {
    Searchitem() {
      this.load()
      api.searchkeyword(this.searchi,
        (result) => {
          this.cload()
          // console.log(result.status)
          if (result.status == 'success') {

            if (result.data != null) {
              // ค้นหาเจอ
              this.contentobj = result.data;
              var toastHTML = '<span style="color:white">ค้นหา : ' + this.searchi + ' สำเร็จ </span>';
              M.toast({ html: toastHTML })
            } else if (result.data == null) {
              // ค้นหาไม่เจอ
              this.contentobj = []
              this.contentobj.push({
                app_code: 'ไม่มีข้อมูล',
                description: 'ไม่มีข้อมูล',
                active_status: 0
              })
              console.log('nullcheck : ' + JSON.stringify(this.contentobj))
              var toastHTML = '<span style="color:white;font-weight:bold">ไม่มีข้อมูล </span>';
              M.toast({ html: toastHTML })
            }
            // console.log(JSON.stringify(result.data))
          }
        },
        (error) => {
          this.cload()
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML })
        })
    },
    gouser() {
      this.$router.push('/user')
    },
    goapp() {
      this.$router.push('/app')
    },
    newapp() {
      this.load()
      var all = new Date()
      var payload = {
        app_code: this.appcodec,
        app_name: this.appnamec,
        description: this.detailc,
        active_status: 1,
        creator_id:  Datauser.id,
        create_date_time: all.getFullYear() + '/' + all.getMonth() + '/' + all.getDate()
      }
      console.log(JSON.stringify(payload))
      api.addapp(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('login :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">บันทึกสำเร็จ Success !!!</span>';
            M.toast({ html: toastHTML });
            this.appcodec = ''
            this.appnamec = ''
            this.detailc = ''
            this.showcontent()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

    },
    showcontent() {
      this.load()
      api.showapp_app(
        (result) => {
          this.cload()
          // console.log(result.status)
          if (result.status == 'success') {
            this.contentobj = result.data;
            console.log('this contentobj' + this.contentobj)
            console.log('Show result:' + JSON.stringify(result))
            // var toastHTML = '<span style="color:white">ค้นหา สำเร็จ </span>';
            // M.toast({ html: toastHTML })

          }
        },
        (error) => {
          this.cload()
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML })
        })
    },
    onapp(val, status) {
      // console.log('on app'+JSON.stringify(val))
      if (status == true) {
        status = 0
      } else if (status == false) {
        status = 1
      }
      this.load()
      var all = new Date()
      var payload = {
        app_code: val.app_code,
        active_status: status,
        editor_id: Datauser.id,
        edit_date_time: all.getFullYear() + '/' + all.getMonth() + '/' + all.getDate(),
        id: val.id
      }
      console.log(JSON.stringify(payload))
      api.turnonapp(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ Success !!!</span>';
            M.toast({ html: toastHTML });
            this.showcontent()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

    },
    turnoffapp(val) {
      console.log('on app' + JSON.stringify(val))

      this.load()
      var all = new Date()
      var payload = {
        app_code: val.app_code,
        active_status: 0,
        editor_id: Datauser.id,
        edit_date_time: all.getFullYear() + '/' + all.getMonth() + '/' + all.getDate(),
        id: val.id
      }
      console.log(JSON.stringify(payload))
      api.turnonapp(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            // console.log('Datauser'+localStorage.Datauser)
            // this.DataUser = result.data
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ Success !!!</span>';
            M.toast({ html: toastHTML });
            this.showcontent()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
      // this.showcontent()
    },
    load() {
      document.getElementById("loading").style.display = "block";
    },
    cload() {
      document.getElementById("loading").style.display = "none";
    },
    returnactive(val) {
      var x
      if (val == 1) {
        x = 'Running'
        return x
      } else if (val == 0) {
        this.colorstatus = 'Not Running'

        return this.colorstatus
      }
    },
    editapp_button() {
      this.load()
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var today = dd + '/' + mm + '/' + yyyy;

      var payload = {
        app_code: this.app_code,
        app_name: this.app_name,
        description: this.description,
        active_status: 1,
        editor_id: Datauser.id,
        edit_date_time: today,
        id: this.edit_id
      }
      console.log(payload)
      api.updateapp(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            var toastHTML = '<span style="color:white">แก้ไขแอพ Success !!!</span>';
            M.toast({ html: toastHTML });
            this.showcontent()
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
     showinfo(val) {
      // close content add modal
      if(val == null){
       var val = this.sendobj
      }
      this.toggleaddmenu = 0
      // 
      console.log(val)
      //editapp
      this.edit_id = val.id
      this.app_code = val.app_code
      this.app_name = val.app_name
      this.description = val.description
      //editapp
      this.sendobj = val
      console.log('showinfo :' + JSON.stringify(val))
      this.topicmodal = val.app_code
      this.load()
      api.showinfomodal(val.id,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('showinfo ::' + JSON.stringify(result.data))
            this.contentmodal = result.data
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    statusmodal1(val, status) {
      if (status == true) {
        status = 0
      } else if (status == false) {
        status = 1
      }
      console.log('on app' + JSON.stringify(val))

      this.load()
      var payload = {
        menu_code: val.menu_code,
        menu_name: val.menu_name,
        active_status: status,
        editor_id: Datauser.id,
        id: val.id
      }
      console.log(JSON.stringify(payload))
      api.changestatusmodal(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ Success !!!</span>';
            M.toast({ html: toastHTML });
            this.showinfo(this.sendobj)
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

    },
    togglemenufun() {
      if (this.toggleaddmenu === 1) {
        this.toggleaddmenu = 0
      } else if (this.toggleaddmenu === 0) {
        this.toggleaddmenu = 1
      }
    },
    addmenusub() {

      var payload = {
        menu_code: this.addmenucode,
        menu_name: this.addmenuname,
        app_id: this.sendobj.id,
        description: this.addmenudescription,
        active_status: 1,
        creator_id: Datauser.id
      }
      api.insertmenu(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            console.log('resultchange :' + JSON.stringify(result))
            var toastHTML = '<span style="color:white">เพิ่มข้อมูลเมนู Success !!!</span>';
            M.toast({ html: toastHTML });
            this.showinfo(this.sendobj)
            this.addmenucode = ''
            this.addmenuname = ''
            this.addmenudescription = ''
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    editmenu(val){
      console.log(val)
      this.menu_code = val.menu_code
      this.menu_name = val.menu_name
      this.menu_description = val.description
      this.app_id = val.app_id
      this.idid = val.id
    },
    data_editmenu(){
      this.load()
      var payload = {
        menu_code:this.menu_code,
        menu_name:this.menu_name,
        app_id:this.app_id,
        description:this.menu_description,
        active_status:1,
        editor_id:Datauser.id,
        id:this.idid
      }
      console.log(JSON.stringify(payload))
      api.updatemenu_a(payload,
        (result) => {
          this.cload()
          if (result.status == 'success') {
            var toastHTML = '<span style="color:white">แก้ไขสำเร็จเมนู '+this.menu_name+' !!!</span>';
            M.toast({ html: toastHTML });
            this.showeditmenu = false
            this.showinfo()
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
    this.showcontent()
    var Datauser = JSON.parse(localStorage.Datauser)
    console.log(Datauser.id)
  }
}
