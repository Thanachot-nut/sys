<template>
  <div class="Main">
    <div class="col-12" align="center">
      <h4 style="text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);letter-spacing: 8px;
    font-weight: bold;">เมนูหลัก</h4>
    </div>
    <div class="container">
    

       <div class="row">
    <div class="col-12 col-md-6 col-sm-6 col-lg-3" @click="gouser">
      <div class="card cardani1" >
        <div class="card-image images" align="center">
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
    <div class="col-12 col-md-6 col-sm-6 col-lg-3" @click="goapp">
      <div class="card cardani2">
        <div class="card-image images2" >
          <!-- <div style="background-color:red;z-index:99;width:100%;height:100%;position:relative"></div> -->
           <!-- <img src="../assets/natural.jpg" style="top:1px;width:105%;height:100%;position:absolute;max-width: none; max-height: none; min-width: none; min-height: none;"> -->
     
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
    <div class="col-12 col-md-6 col-sm-6 col-lg-3" @click="gorole">
      <div class="card cardani3">
        <div class="card-image images3">
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
    <div class="col-12 col-md-6 col-sm-6 col-lg-3" @click="goper">
      <div class="card cardani4">
        <div class="card-image images4">
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
  </div>
</template>

<script src="../js/Main.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Main.css" scoped>
</style>
