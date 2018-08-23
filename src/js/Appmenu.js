import api from "../service/service.js"

export default {
  name: "App",
  data() {
    return {
      user: "",
      pass: "",
      value: "",
      contentobj: [],
      colorstatus: '',
      bg:'',
      searchi:'',
      appcodec:'',
      appnamec:'',
      detailc:'',
      contentmodal:[],
      topicmodal:'',
      sendobj:[]
    }
  },
  methods: {
    Searchitem(){
      this.load()
      api.searchkeyword(this.searchi,
        (result) => {
          this.cload()
            // console.log(result.status)
            if (result.status == 'success') {
             
              if(result.data != null){
                 // ค้นหาเจอ
                this.contentobj = result.data;
              var toastHTML = '<span style="color:white">ค้นหา : ' + this.searchi +' สำเร็จ </span>';
              M.toast({ html: toastHTML })
            }else if(result.data == null){
              // ค้นหาไม่เจอ
              this.contentobj = []
              this.contentobj.push({
                app_code : 'ไม่มีข้อมูล',
                description: 'ไม่มีข้อมูล',
                active_status: 0
              })
              console.log('nullcheck : '+JSON.stringify(this.contentobj))
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
    gouser(){
      this.$router.push('/user')
    },
    goapp () {
      this.$router.push('/app')
    },
    newapp(){
      this.load()
      var all = new Date()
      var payload = {
        app_code : this.appcodec,
        app_name : this.appnamec,
        description: this.detailc,
        active_status: 1,
        creator_id:1,
        create_date_time: all.getFullYear()+'/'+all.getMonth()+'/'+all.getDate()
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
    showcontent(){
      this.load()
      api.showapp_app(
        (result) => {
          this.cload()
            // console.log(result.status)
            if (result.status == 'success') {
              this.contentobj = result.data;
              console.log('this contentobj'+this.contentobj)
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
    onapp(val){
      console.log('on app'+JSON.stringify(val))

      this.load()
      var all = new Date()
      var payload = {
        app_code : val.app_code,
        active_status : 1,
        editor_id: val.editor_id,
        edit_date_time: all.getFullYear()+'/'+all.getMonth()+'/'+all.getDate(),
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
    turnoffapp(val){
      console.log('on app'+JSON.stringify(val))

      this.load()
      var all = new Date()
      var payload = {
        app_code : val.app_code,
        active_status : 0,
        editor_id: val.editor_id,
        edit_date_time: all.getFullYear()+'/'+all.getMonth()+'/'+all.getDate(),
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
    load () {
      document.getElementById("loading").style.display = "block";
    },
    cload () {
      document.getElementById("loading").style.display = "none";
    },
    returnactive(val){
      var x
       if(val == 1){
         x = 'Running'
         return x
       }else if(val == 0){
         this.colorstatus = 'Not Running'
       
          return this.colorstatus
     }
    },
    showinfo(val){
      this.sendobj = val
      console.log('showinfo :' +JSON.stringify(val))
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
    statusmodal1(val){
      console.log('on app'+JSON.stringify(val))

      this.load()
      var payload = {
        menu_code : val.menu_code,
        menu_name : val.menu_name,
        active_status: 1,
        editor_id: 1,
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
    statusmodal0(val){
      console.log('on app'+JSON.stringify(val))
      this.load()
      var payload = {
        menu_code : val.menu_code,
        menu_name : val.menu_name,
        active_status: 0,
        editor_id: 1,
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
    }
    
  },
  mounted() {
    this.showcontent()
  }
}
