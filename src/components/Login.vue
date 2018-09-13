<template>
  <div class="Login">
    <div class="container-fluid h-100" style="position:absolute;top:50%;transform:translateY(-50%)">
      <div style="
    position: relative;" class="row justify-content-center align-items-center h-100" >
        <div class="col-10 col-sm-7 col-md-6 col-lg-4 col-xl-3" style="box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;padding:25px;margin-top:20px;">
          <form action="" class="">
            <img class="animationpic" style="width:100%;height:100%;" src="../assets/logo_nopadol.jpg">
            <div class="form-group">
              <div class="input-field col animationtext1" style="position:relative">
                <div style="width: 30px; height: 30px; background: white; position: absolute; left: 0px; bottom: 8px;line-height: 33px;">
                  <font-awesome-icon style="color:#0088CB;font-size:20px" icon="user" />
                </div>
                 <input autofocus style="left:25px;position:relative" v-model="user" id="name" type="text" class="validate">
                <label style="left:35px;" for="name">Username</label>
              </div>
            </div>
            <div class="form-group">
              <div class="input-field col animationtext2">
                <div style="width: 30px; height: 30px; background: white; position: absolute; left: 0px; bottom: 8px;line-height: 33px;">
                  <font-awesome-icon style="color:#0088CB;font-size:20px" icon="key" />
                </div>
                <input style="left:25px;position:relative" v-model="pass" id="last_name" type="password" class="validate">
                <label style="left:35px;" for="last_name">Password</label>
              </div>
            </div>
            <div class="form-group">
              <button  style="left:15px;position:relative;background:#F0B847" class="btn btn-info btn-lg btn-block animationtext3" @click="login()">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/Login.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Login.css" scoped>
</style>
