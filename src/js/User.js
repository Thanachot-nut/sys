import api from "../service/service.js"
var Datauser = JSON.parse(localStorage.Datauser)
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
      page: 1,
      prevpage: 0,
      nextpage: 20,
      coloractive: '',
      activeItem: 0,
      selectbranch: '',
      selectdepartment: '',
      selectexpert: '',
      selectprofitcenter: '',
      V_selectbranch: '',
      V_department: '',
      V_expert: '',
      V_profitcenter: '',
      profile_user: '',
      swich_pro_permis: 0,
      backgroundper: 'white',
      backgrounduser: '#64b5f6',
      topuser: '-5px',
      topper: '0',
      objuserprofile: [],
      profile_name: '',
      profile_telephone: '',
      profile_user_code: '',
      profile_password: '',
      profile_branch_code: '',
      profile_department_name: '',
      profile_expert_name: '',
      profile_profitcenter_name: '',
      profile_id: '',
      profile_branch_code2: '',
      profile_department_name2: '',
      profile_expert_name2: '',
      profile_profitcenter_name2: '',
      objectapp: [],
      roleobj: [],
      searchrole: '',
      editrole: '',
      showper: false,
      allappselect: [],
      selectaddrole: '',
      selectaddapp: '',
      idlogin: 0
    }
  },
  methods: {
    profileuser() {
      // css
      this.swich_pro_permis = 0
      if (this.swich_pro_permis == 0) {
        this.backgrounduser = '#64b5f6'
        this.topuser = '-5px'
        this.topper = '0'
        this.backgroundper = 'white'
      }
      // css
    },
    permissionuser() {
      // css
      this.swich_pro_permis = 1
      if (this.swich_pro_permis == 1) {
        this.backgroundper = '#64b5f6'
        this.topper = '-5px'
        this.topuser = '0'
        this.backgrounduser = 'white'
      }
      // css
    },
    getuser() {
      this.load()

      api.showalluser(this.usercode,
        (result) => {
          this.cload()
          console.log(result.status)
          console.log('result length ::' + result.length)
          var page = (result.length) / 20
          console.log('page :' + page)
          this.page = parseInt(page) + 1

          this.objuser = result.slice(this.prevpage, this.nextpage)


        },
        (error) => {
          this.cload()
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML })
        })
    },
    load() {
      document.getElementById("loading").style.display = "block";
    },
    cload() {
      document.getElementById("loading").style.display = "none";
    },
    canceluser() {
      this.usercode_add = ''
      this.username_add = ''
      this.password_add = ''
      this.phone_add = ''

      this.adduser = !this.adduser
    },
    insertuser() {
      console.log('add User')
      this.load()
      var payload = {
        user_code: this.usercode_add,
        user_name: this.username_add,
        password: this.password_add,
        telephone: this.phone_add,
        branch_id: this.V_selectbranch,
        profitcenter_id: this.V_profitcenter,
        department_id: this.V_department,
        expert_id: this.V_expert,
        creator_id: Datauser.id
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
    openadduser() {
      if (this.adduser == false) {
        this.adduser = true
      } else if (this.adduser == true) {
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
          console.log('result length ::' + result.length)
          var page = (result.length) / 20
          console.log('page :' + page)
          this.page = parseInt(page) + 1

          this.objuser = result.slice(this.prevpage, this.nextpage)
          // console.log(this.objuser)
          // console.log(JSON.stringify(this.objuser))
          // var toastHTML = '<span style="color:white">ค้นหา ' + usercode + ' สำเร็จ </span>';
          // M.toast({ html: toastHTML })

        },
        (error) => {
          this.cload()
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML })
        })
    },
    changestatus(val) {
      var x;
      if (val == 1) {
        x = 'ทำงาน'
        return x
      } else if (val == 0) {
        x = 'ลาออก'
        return x
      }
    },
    test123() {
      alert('dddd')
    },
    status0(val, status) {
      if (status == true) {
        status = 0
      } else if (status == false) {
        status = 1
      }
      console.log(status)
      console.log('on app' + JSON.stringify(val))
      this.load()
      var payload = {
        user_code: val.user_code,
        active_status: status,
        editor_id: Datauser.id,
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
            var toastHTML = '<span style="color:white">เปลี่ยนสเตตัสสำเร็จ !!!</span>';
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
    clickpage(val) {
      this.coloractive = val
      this.activeItem = val;
      var numpage = (val);
      var result = 20 * numpage
      console.log(result)
      this.prevpage = 0 + result,
        this.nextpage = 20 + result,
        this.showall()
      // console.log('activeitem : '+this.activeItem)

    },
    detailprofile(val) {
      // this.showper = false
      if (!val) {
        var val = this.objuserprofile
      }
      // clear

      this.profile_branch_code2 = ''
      this.profile_department_name2 = ''
      this.profile_expert_name2 = ''
      this.profile_profitcenter_name = ''
      // clear
      console.log(JSON.stringify(val))
      this.objuserprofile = val
      this.profile_name = val.user_name
      this.profile_telephone = val.telephone
      this.profile_user_code = val.user_code
      this.profile_password = val.password
      this.profile_id = val.id
      this.profile_branch_code = val.branch_code
      this.profile_department_name = val.department_name
      this.profile_expert_name = val.expert_code
      this.profile_profitcenter_name = val.profitcenter_name

      console.log(this.objuserprofile.branch_code)
      this.profile_user = val.user_name

      // call api menu permission
      this.load()

      // ใส่ค่า select ให้แสดง
      this.profile_branch_code2 = val.branch_id
      this.profile_department_name2 = val.department_id
      this.profile_expert_name2 = val.expert_id
      this.profile_profitcenter_name2 = val.profitcenter_id
      // ใส่ค่า select ให้แสดง

      this.showroleall()
      api.callroleinuser(val.id,
        (result) => {

          this.objectapp = result.data
          this.getallapp()
          console.log(JSON.stringify(this.objectapp))
          this.cload()
        },
        (error) => {
          this.objectapp = []
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })


    },
    getallselect() {
      this.load()
      api.callbranch(
        (result) => {
          this.selectbranch = result

          // branch_code
          console.log('branchcode : ' + JSON.stringify(result))
          console.log('branchcode : ' + JSON.stringify(result.length))
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

      api.calldepartments(
        (result) => {
          this.selectdepartment = result
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

      api.callexperts(
        (result) => {
          this.selectexpert = result
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

      api.callprofitcenters(
        (result) => {
          this.selectprofitcenter = result
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

    },
    saveprofile() {
      var payload = {
        user_code: this.profile_user_code,
        user_name: this.profile_name,
        password: this.profile_password,
        telephone: this.profile_telephone,
        branch_id: this.profile_branch_code2,
        profitcenter_id: this.profile_profitcenter_name2,
        department_id: this.profile_department_name2,
        expert_id: this.profile_expert_name2,
        active_status: 1,
        editor_id: Datauser.id,
        id: this.profile_id,
      }
      console.log(JSON.stringify(payload))
      this.load()
      api.editprofile(payload,
        (result) => {
          this.cload()
          console.log(result)
          this.showall()
          var toastHTML = '<span style="color:white">แก้ไข User สำเร็จ </span>';
          M.toast({ html: toastHTML })
        },
        (error) => {
          this.cload()
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด !!!</span>';
          M.toast({ html: toastHTML })
        })
    },
    showroleall() {
      this.load()
      api.showrolealls(this.searchrole,
        (result) => {
          this.cload()
          console.log(result.status)
          if (result.status == 'success') {
            console.log('showrole : ' + JSON.stringify(result.data))
            this.roleobj = result.data
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    savepermission(val, c) {
      console.log(c)


      var payload = {
        role_id: this.editrole,
        id: val.id
      }
      this.editrole = ''
      console.log(JSON.stringify(payload))
      api.edituserrole(payload,
        (result) => {
          this.cload()
          console.log(result.status)
          if (result.status == 'success') {
            console.log('showrole : ' + JSON.stringify(result.data))
            this.detailprofile()
            var toastHTML = '<span style="color:white">แก้ไข User สำเร็จ </span>';
            M.toast({ html: toastHTML })
          }
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    getallapp() {
      api.callappall(
        (result) => {
          this.cload()
          console.log(JSON.stringify(result.data)) //ทั้งหมด
          // this.allappselect = result.data 
          // this.objectapp
          console.log(JSON.stringify(this.objectapp))  // มีเท่าไร
          if (this.objectapp == null) {
            this.allappselect = []
            return
          }
          var deSelectedRows = this.objectapp
          var selectedRows = result.data
          //กรองค่าที่ซ้ำออก 
          selectedRows = selectedRows.filter(function (cv) {
            return !deSelectedRows.find(function (e) {
              return e.app_code == cv.app_code;
            });
          });
          console.log(selectedRows)
          this.allappselect = selectedRows


        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })
    },
    addperinapp() {
      var payload = {
        app_id: this.selectaddapp,
        user_id: this.profile_id,
        role_id: this.selectaddrole,
        creator_id: Datauser.id,
      }

      api.insertuserrole(payload,
        (result) => {
          this.cload()
          this.detailprofile()
          var toastHTML = '<span style="color:white">เพิ่ม แอพ และ Role สำเร็จ </span>';
          M.toast({ html: toastHTML })
        },
        (error) => {
          var toastHTML = '<span style="color:white;font-weight:bold">เกิดข้อผิดพลาด  !!!</span>';
          M.toast({ html: toastHTML });
          this.cload()
        })

      console.log(JSON.stringify(payload))
    },
  },
  mounted() {
    this.getallselect()
    this.coloractive = 0
    this.showall()
  }
}
