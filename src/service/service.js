import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

const URL1 = 'http://venus.nopadol.com'
const URL = 'https://sys.nopadol.com'
// const URL = 'http://api.nopadol.com'
// const URL2 = 'http://venus'

export default {
  signin (user, pass, success, error) {
    Vue.axios.get(URL + '/login?access_token=aaaa&usercode=' + user + '&password=' + pass + '&appid=6').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getuser (user, success, error) {
    Vue.axios.get(URL + '/user?access_token=aaaa&user_code=' + user).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insert_user (data, success, error) {
    Vue.axios.post(URL + '/user', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showapp_app (success, error) {
    Vue.axios.get(URL + '/apps?access_token=').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  searchkeyword (data, success, error) {
    Vue.axios.get(URL + '/apps/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  addapp (data, success, error) {
    Vue.axios.post(URL + '/app', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  turnonapp (data, success, error) {
    Vue.axios.put(URL + '/app/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showrolealls (data, success, error) {
    Vue.axios.get(URL + '/roles/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showalluser (data, success, error) {
    Vue.axios.get(URL + '/users/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  changestatusrole (data, success, error) {
    Vue.axios.put(URL + '/role/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  changestatususer (data, success, error) {
    Vue.axios.put(URL + '/user/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  showinfomodal(data, success, error) {
    Vue.axios.get(URL + '/menu/app_id?access_token=aaaa&app_id=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  changestatusmodal(data, success, error) {
    Vue.axios.put(URL + '/menu/disable' , JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insertmenu(data, success, error) {
    Vue.axios.post(URL + '/menu' , JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },      
  callbranch( success, error) {
    Vue.axios.get(URL + '/branchs?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }, 
  calldepartments(success, error) {
    Vue.axios.get(URL + '/departments?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }, 
  callexperts(success, error) {
    Vue.axios.get(URL + '/experts?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callprofitcenters(success, error) {
    Vue.axios.get(URL + '/profitcenters?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callappall(success, error) {
    Vue.axios.get(URL + '/apps?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  apptorole(data,success, error) {
    Vue.axios.get(URL + '/app/role?access_token=aaaa&app_id=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  permissionall(role,app,success, error) {
    Vue.axios.get(URL + '/permissions?access_token=aaaa&app_id='+app+'&role_id='+role).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  updatepermis_all(data,success, error) {
    Vue.axios.put(URL + '/permission', data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  saveapprole(data,success, error) {
    Vue.axios.post(URL + '/app/role',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  addrole(data,success, error) {
    Vue.axios.post(URL + '/role',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  editprofile(data,success, error) {
    Vue.axios.put(URL + '/user',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callroleinuser(data,success, error) {
    Vue.axios.get(URL + '/userroles?access_token=aaaa&user_id='+data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  edituserrole(data,success, error) {
    Vue.axios.put(URL + '/userrole',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insertuserrole(data,success, error) {
    Vue.axios.post(URL + '/userrole',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  editrole(data,success, error) {
    Vue.axios.put(URL + '/role',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  updateapp(data,success, error) {
    Vue.axios.put(URL + '/app',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  updatemenu_a(data,success, error) {
    Vue.axios.put(URL + '/menu',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
}
