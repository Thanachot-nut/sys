<template>
  <div id="app">
    <div style="background-color:#0089cf;width:100%;height:50px;position:relative">
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
  },
  mounted() {
     console.log(this.$router)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');

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
    color: #039be5 ;
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

</style>
