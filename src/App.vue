<template>
  <div id="app">
    <div v-show="this.$route.path != '/'" style="background-color:#0089cf;width:100%;height:50px;position:relative">
        <div class="row">
        <div @click="getback" exact class="menu" style="text-align:center;">
           <font-awesome-icon class="fontawesomeb" icon="chevron-left" />
        </div>
         <router-link tag="div" to="/index" @click="getback" class="menu" style="text-align:center;" active-class="activem" >
        <img src="./assets/house.png" class="imagesm">
        </router-link>
        <router-link tag="div" to="/user" @click="getback" class="menu" style="text-align:center;" active-class="activem">
        <img src="./assets/menu/001-users.png" class="imagesm">
        </router-link>
        <router-link tag="div" to="/app" @click="getback" class="menu" style="text-align:center;" active-class="activem">
            <img src="./assets/menu/002-smartphone.png" class="imagesm">
        </router-link>
        <router-link tag="div" to="/role" @click="getback" class="menu" style="text-align:center;" active-class="activem">
         <img src="./assets/menu/003-resume.png" class="imagesm">
        </router-link>
          <router-link tag="div" to="/permission" @click="getback" class="menu" style="text-align:center;" active-class="activem">
        <img src="./assets/menu/004-delete.png" class="imagesm">
        </router-link>
         <router-link tag="div" to="/"  @click="getback" class="menulogout" style="text-align:center;" active-class="activem" exact>
        <img src="./assets/logout.png" class="imagesm">
        </router-link>
        </div>
       <div id="loading" class="progress" style="position:absolute;bottom:-17.5px;display:none;">
      <div class="indeterminate"></div>
    </div>
    </div>
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: 0
    }
  },
  methods: {
    getback(){
      this.$router.go(-1)
    }
  },
  mounted() {
     console.log(this.$router)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');
.activem{
   background: #4fc3f7;
}
.activem .imagesm{
  transform: scale(1.25);
}
.menulogout{
  right: 0;
  border-left: 1px solid #81d4fa;width:50px;height:50px;position: absolute;cursor:pointer;
transition: all 0.5s;
}
.menulogout:hover {
  border-right: 1px solid white;
  background: #4fc3f7

}
.menulogout:hover .imagesm{
  transform: scale(1.25);

}
.imagesm{
      width: 30px;
    top: 9.5px;
    position: relative;
    transition: all 0.5s;
}
.menu{
border-right: 1px solid #81d4fa;width:50px;height:50px;position:relative;cursor:pointer;
transition: all 0.5s;
}
.fontawesomeb{
color:white;font-size:25px;position: relative;top: 11.5px;
}
.menu:hover {
  border-right: 1px solid white;
  background: #4fc3f7

}
.menu:hover .imagesm{
  transform: scale(1.25);

}
.menu:hover .fontawesomeb{
  animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
 
   100% {
    -webkit-transform: translateX(-25px);
            transform: translateX(-25px);
    opacity: 0;
  }
  
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Kanit', sans-serif !important;
}

.input-field input:focus + label {
  color: #0088CB !important;
}
.row .input-field input:focus {
  border-bottom: 1px solid #0088CB !important;
  box-shadow: 0 1px 0 0 #0088CB !important;
}

input.valid[type=text]:not(.browser-default),
input[type=text]:not(.browser-default):focus:not([readonly])
{
  border-bottom: 1px solid rgb(0, 136, 203) !important;
  /*  -webkit-box-shadow: 0 1px 0 0 #4CAF50;*/
    box-shadow: 0 1px 0 0 rgb(0, 136, 203) !important;
}

@media only screen and (max-width: 992px){
.modal {
    width: 100%;
}
}
.progress {
  background-color: #b9f6ca !important;
}
.progress .indeterminate {
    background-color: #00e676 !important;
}
@media (min-width: 576px){
.modal-dialog {
    max-width: 600px;
    margin: 1.75rem auto;
}}
@media only screen and (max-width: 992px){
.modal {
    width: 100% !important;
}}
a:hover{
  text-decoration: none;
  color: white !important;
  background-color: #ee6e73 !important;
  transform: scale(1.15)
}
a{
      color: #039be5;
      transition: all 0.5s;
}
.pagination li a {
    color: #039be5 !important;
}
.pagination li.active a {
    color: #fff !important;
}
.bordercolor{
      border: 1px solid rgba(0,0,0,0.25);
          border-radius: 10px;
box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
}
table.highlight > tbody > tr:hover {
    background: rgba(11, 160, 247, 0.363) !important;
}
@media only screen and (max-width: 600px) {
    .highlight {
        margin-top: 0;
    }
}
/*  */

</style>
