import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

const URL = 'http://venus.nopadol.com'
// const URL = 'http://api.nopadol.com'
// const URL2 = 'http://venus'

export default {
  signin (user, pass, success, error) {
    Vue.axios.get(URL + ':9000/login?access_token=aaaa&usercode=' + user + '&password=' + pass + '&appid=6').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  getuser (user, success, error) {
    Vue.axios.get(URL + ':9000/user?access_token=aaaa&user_code=' + user).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insert_user (data, success, error) {
    Vue.axios.post(URL + ':9000/user', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showapp_app (success, error) {
    Vue.axios.get(URL + ':9000/apps?access_token=').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  searchkeyword (data, success, error) {
    Vue.axios.get(URL + ':9000/apps/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  addapp (data, success, error) {
    Vue.axios.post(URL + ':9000/app', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  turnonapp (data, success, error) {
    Vue.axios.put(URL + ':9000/app/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showrolealls (data, success, error) {
    Vue.axios.get(URL + ':9000/roles/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  showalluser (data, success, error) {
    Vue.axios.get(URL + ':9000/users/search?access_token=aaaa&keyword=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  changestatusrole (data, success, error) {
    Vue.axios.put(URL + ':9000/role/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  changestatususer (data, success, error) {
    Vue.axios.put(URL + ':9000/user/disable', JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  showinfomodal(data, success, error) {
    Vue.axios.get(URL + ':9000/menu/app_id?access_token=aaaa&app_id=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },  
  changestatusmodal(data, success, error) {
    Vue.axios.put(URL + ':9000/menu/disable' , JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insertmenu(data, success, error) {
    Vue.axios.post(URL + ':9000/menu' , JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },      
  callbranch( success, error) {
    Vue.axios.get(URL + ':9000/branchs?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }, 
  calldepartments(success, error) {
    Vue.axios.get(URL + ':9000/departments?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  }, 
  callexperts(success, error) {
    Vue.axios.get(URL + ':9000/experts?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callprofitcenters(success, error) {
    Vue.axios.get(URL + ':9000/profitcenters?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callappall(success, error) {
    Vue.axios.get(URL + ':9000/apps?access_token=aaaa').then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  apptorole(data,success, error) {
    Vue.axios.get(URL + ':9000/app/role?access_token=aaaa&app_id=' + data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  permissionall(role,app,success, error) {
    Vue.axios.get(URL + ':9000/permissions?access_token=aaaa&app_id='+app+'&role_id='+role).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  updatepermis_all(data,success, error) {
    Vue.axios.put(URL + ':9000/permission', data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  saveapprole(data,success, error) {
    Vue.axios.post(URL + ':9000/app/role',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  editprofile(data,success, error) {
    Vue.axios.put(URL + ':9000/user',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  callroleinuser(data,success, error) {
    Vue.axios.get(URL + ':9000/userroles?access_token=aaaa&user_id='+data).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  edituserrole(data,success, error) {
    Vue.axios.put(URL + ':9000/userrole',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
  insertuserrole(data,success, error) {
    Vue.axios.post(URL + ':9000/userrole',JSON.stringify(data)).then(
      (response) => {
        success(response.data)
      },
      (response) => {
        error(response)
      })
  },
}
