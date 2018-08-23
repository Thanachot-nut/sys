<template>
  <div class="Main">
    <div class="col-12" align="center">
      <p style="font-size:50px;">เมนู</p>
    </div>

       <div class="row">
    <div class="col-12 col-md-3 col-sm-6 " @click="gouser">
      <div class="card cardani1" >
        <div class="card-image" align="center">
                    <img src="../assets/menu/001-users.png" class="cimagemenu">
          <span class="card-title" >User</span>
        </div>
        <div class="card-content">
         เพิ่มผู้ใช้
        </div>
        <div class="card-action">
          <a href="#">User</a>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="col-12 col-md-3 col-sm-6" @click="goapp">
      <div class="card cardani2">
        <div class="card-image">
           <img src="../assets/menu/002-smartphone.png" class="cimagemenu">
            <span class="card-title" >App</span>
        </div>
        <div class="card-content">
          เพิ่มแอพพลิเคชั่น
        </div>
        <div class="card-action">
          <a href="#">App</a>
        </div>
      </div>
    </div>
  <!--  -->
    <div class="col-12 col-md-3 col-sm-6" @click="gorole">
      <div class="card cardani3">
        <div class="card-image">
         <img src="../assets/menu/003-resume.png" class="cimagemenu">
            <span class="card-title" >Role</span>
        </div>
        <div class="card-content">
          <p>กำหนดสิทธิ์</p>
        </div>
        <div class="card-action">
          <a href="#">Role</a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3 col-sm-6">
      <div class="card cardani4">
        <div class="card-image">
         <img src="../assets/menu/004-delete.png" class="cimagemenu">
            <span class="card-title" >Permission</span>
        </div>
        <div class="card-content">
        กำหนดการเข้าถึง
        </div>
        <div class="card-action">
          <a href="#">Permission</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script src="../js/Main.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Main.css" scoped>
</style>
