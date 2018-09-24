import api from "../service/service.js"
if(localStorage.Datauser){
  var Datauser = JSON.parse(localStorage.Datauser)
  }

export default {
  name: "Per",
  data() {
    return {
      user: "",
      pass: "",
      appall:[],
      apptorole:[],
      appid:'',
      permissionall:[],
      coloractive:'',
      colorrole:'',
      colorapp:'',
      autoanimation:0,
      roleobj:[],
      searchrole:'',
      closebutton:0,
    }
  },
  methods: {
    callapiapp(){
      this.load()
      api.callappall(
        (result) => {
          this.cload()
          this.appall = result.data
          // console.log(JSON.stringify(result.data))
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    showroleall() {
      this.load()
      api.showrolealls(this.searchrole,
        (result) => {
          this.cload()
          // console.log(result.status)
          if (result.status == 'success') {
            // console.log('login :' + JSON.stringify(result))
            console.log('มียุแล้ว'+JSON.stringify(this.apptorole))
            console.log('ทั้งหมด'+JSON.stringify(result.data))
           var deSelectedRows = this.apptorole
           var selectedRows = result.data
           //กรองค่าที่ซ้ำออก 
            selectedRows= selectedRows.filter(function(cv){
              return !deSelectedRows.find(function(e){
                  return e.role_name == cv.role_name;
              });
          });
          if(selectedRows != ''){
            this.roleobj = selectedRows
            this.closebutton = 1
          }else {
            // alert('ไม่มีค่า')
            this.closebutton = 0
              this.roleobj = [{
              role_name : 'ไม่มีข้อมูลเพิ่ม',
              description : 'ไม่มีข้อมูลเพิ่ม',
            }]
            console.log(this.roleobj)
          }
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    is_create(val){
      if(val.is_create == 0){
        val.is_create = 1
      }else if(val.is_create == 1){
        val.is_create = 0
      }
    },
    is_read(val){
      if(val.is_read == 0){
        val.is_read = 1
      }else if(val.is_read == 1){
        val.is_read = 0
      }
    },
    is_update(val){
      if(val.is_update == 0){
        val.is_update = 1
      }else if(val.is_update == 1){
        val.is_update = 0
      }
    },
    is_delete(val){
      if(val.is_delete == 0){
        val.is_delete = 1
      }else if(val.is_delete == 1){
        val.is_delete = 0
      }
    },
    submitpermission(val){
    
      var cutval = val
      console.log(JSON.stringify(val))
      for (var i = 0; i < cutval.length; i++) {
        delete cutval[i].app_id
        delete cutval[i].app_code
        delete cutval[i].app_name
        delete cutval[i].role_id
        delete cutval[i].role_code
        delete cutval[i].role_name
        delete cutval[i].menu_id
        delete cutval[i].menu_code
        // delete cutval[i].menu_name
        delete cutval[i].creator_id
        delete cutval[i].editor_id
      }
      var payload =  '{"data":'+JSON.stringify(cutval)+'}'
      console.log(val)
      api.updatepermis_all(payload,
        (result) => {
          console.log(result)
          var toastHTML = '<span style="color:white">บันทึกข้อมูล สำเร็จ </span>';
          M.toast({ html: toastHTML })
        },
        (error) => {
          console.log(error)
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
    checknovalue(val){
      // console.log(val)
      if(val == ''){
        var x 
        return  x = '-'
      }else{
        return val
      }
    },
    showrole(val,index){
      // anima
      this.autoanimation = 0

      // anima
      //clear
      this.permissionall = []
      this.colorrole = ''
      //clear
      this.load()
      this.appid = val.id
      console.log('appid :/'+val.id)
      api.apptorole(val.id,
        (result) => {
          // anima
          this.autoanimation = 1
          // anima
          this.cload()
          this.colorapp = index //toggle color
         console.log(JSON.stringify(result.data))
          this.apptorole = result.data

        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    permissions(val,index){
      this.load()
      // console.log(val.role_id)
      // console.log('appid : '+this.appid)
      api.permissionall(val.role_id,this.appid,
        (result) => {
          this.cload()
          this.colorrole = index //toggle color
        
        this.permissionall = result.data

        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    Addrole(){
      this.showroleall()
    },
    addroleinapp(val){
      // appid5
      // console.log(val)
      // console.log(this.appid)
      // this.load()
      var payload = {
        app_id : this.appid,
        role_id : val.id,
        creator_id: Datauser.id,
      }
      console.log('approle'+JSON.stringify(this.apptorole))
      console.log(JSON.stringify(payload))
      api.saveapprole(payload,
        (result) => {
          console.log(result)
                  // call api role ใหม่ 
                    api.apptorole(this.appid,
                    (result) => {
                      this.apptorole = result.data
                    },
                  (error) => {
                    var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
                    M.toast({ html: toastHTML });
                    this.cload()
                    })
                     // call api role ใหม่ 
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    }
  },
  mounted() {
    this.callapiapp()
    var Datauser = JSON.parse(localStorage.Datauser)
    console.log(Datauser.id)
  }
}
