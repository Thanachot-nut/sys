<template>
  <div class="User">
    <div class="animationstart animationstart1 "><h4 style="text-align:center;text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);letter-spacing: 8px;
    font-weight: bold;">จัดการผู้ใช้</h4></div>
    <div class="container">
      <div class="col-12 col-sm-5 col-md-5 animationstart2 bordercolor" style="display:inline-block">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group">
          <div class="input-field col" style="position:relative">
            <div @click="getuser" class="containsearch" >
              <font-awesome-icon style="position:absolute;color:white;font-size:25px;top:50%;left:50%;transform:translate(-50%,-50%)" icon="search" />
            </div>
            <input style="left:35px;position:relative;width:95%" autofocus @keyup.enter="getuser" v-model="usercode" id="last_name" type="text" class="validate">
            <label style="left:53px;" for="last_name">Search</label>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-12 col-sm-5 col-md-5 " style="display:inline-block;">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group">
          <div class="input-field col" style="position:relative">
            <button class="btn waves-effect green accent-2 animationstart2" @click="openadduser()" data-toggle="modal" data-target="#exampleModal" type="submit" name="action">     <font-awesome-icon style="color:white;font-size:20px;position:relative;top:2.5px;margin-right:5px;" icon="plus" />
             Add user
            </button>
          </div>
        </div>
      </div>
  <!--  -->
       <transition name="fade">
       <div v-show="adduser" class="col-12 col-sm-12 col-md-12 bordercolor" style="display:inline-block;margin-top:10px;margin-bottom:5px;">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group" style="text-align:center">
          <div style="margin-top:10px">
         <span style="font-size:20px;font-weight:bold" class="animationstart1">ADD USER</span>
         <!--  -->
            <div class="col-12 animationstart2 responsive" >
              <div class="row">
           <div class="input-field col-12 col-sm-5" style="position:relative">
            <div class="containsearch2" style="background:#ba68c8" >
              <font-awesome-icon style="position:absolute;color:white;font-size:25px;top:50%;left:50%;transform:translate(-50%,-50%)" icon="pen" />
            </div>
            <input style="position:relative;left: 45px;
    width: 80%;" v-model="usercode_add" id="usercode_add" type="text" class="validate">
            <label style="left:96px;" class="edit_respon" for="usercode_add">ชื่อ - นามสกุล</label>
          </div>
          <div class=" col-12 col-sm-5" style="    margin-left: 22px;position:relative;text-align:center;white-space: nowrap;">
        <!-- <label for="sel1">Select list (select one):</label> -->
        กรุณาเลือกสาขา
      <select v-model="V_selectbranch" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectbranch"  :value="val.id">{{val.branch_code}}</option> 
      </select>
          </div>
          </div>
              </div>
            <!--  -->
         <div class="col-12 animationstart3 responsive" >
           <div class="row">
           <div class="input-field col-12 col-sm-5" style="position:relative">
           <div class="containsearch2" style="background:#f06292" >
              <font-awesome-icon style="position:absolute;color:white;font-size:25px;top:50%;left:50%;transform:translate(-50%,-50%)" icon="signature" />
            </div>
            <input style="position:relative;left: 45px;
    width: 80%;" v-model="username_add" id="username_add" type="text" class="validate">
            <label style="left:96px;"  class="edit_respon" for="username_add">ผู้ใช้ (Username)</label>
          </div>
            <div class=" col-12 col-sm-5" style="    margin-left: 22px;position:relative;text-align:center;white-space: nowrap;">
        กรุณาเลือกหน่วยงาน
      <select v-model="V_department" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectdepartment" :value="val.id" >{{val.department_name}}</option>
      </select>
          </div>
          </div>
          </div>
              <!--  -->
                   <div class="col-12 animationstart4 responsive" >
                     <div class="row">
           <div class="input-field col-12 col-sm-5" style="position:relative">
           <div class="containsearch2" style="background:#e57373" >
              <font-awesome-icon style="position:absolute;color:white;font-size:25px;top:50%;left:50%;transform:translate(-50%,-50%)" icon="unlock" />
            </div>
            <input style="position:relative;left: 45px;width: 80%;" v-model="password_add" id="Password" type="text" class="validate">
            <label  style="left:96px;"  class="edit_respon" for="Password">รหัสผ่าน (Password)</label>
          </div>
           <div class="col-12 col-sm-5" style="    margin-left: 22px;position:relative;text-align:center;white-space: nowrap;">
       กรุณาเลือกแผนก
      <select v-model="V_expert" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectexpert" :value="val.id">{{ val.expert_code}}</option>
      </select>
          </div>
                   </div>
          </div>
          <!--  -->
           <div class="col-12 animationstart5 responsive">
             <div class="row">
           <div class="input-field col-12 col-sm-5" style="position:relative">
         <div class="containsearch2" style="background:#64b5f6" >
              <font-awesome-icon style="position:absolute;color:white;font-size:25px;top:50%;left:50%;transform:translate(-50%,-50%)" icon="phone" />
            </div>
            <input style="position:relative;left: 45px;width: 80%;" v-model="phone_add" id="Phone" type="text" class="validate">
            <label  style="left:96px;"  class="edit_respon" for="Phone">เบอร์โทรศัพท์</label>
          </div>
          <div class=" col-12 col-sm-5" style="    margin-left: 22px;position:relative;text-align:center;white-space: nowrap;">
       กรุณาเลือก Profitcenters
      <select v-model="V_profitcenter" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectprofitcenter" :value="val.id">{{val.profitcenter_name}}</option> 
      </select>
          </div>
           </div>
          </div>
          <!--  -->
          <div class="row animationstart6" style="text-align:center;margin-top:15px;">
          <div class="col-6 col-sm-5 col-md-5" >
         <button class="btn waves-effect  teal accent-3 " @click="insertuser()" data-toggle="modal" data-target="#exampleModal" type="submit" name="action">     <font-awesome-icon style="color:white;font-size:20px;position:relative;top:2.5px;margin-right:5px;" icon="plus" />
             ตกลง
            </button>
          </div>
          <br>
          <div class="col-6 col-sm-5 col-md-5" >
         <button class="btn waves-effect red accent-1 " @click="canceluser()" data-toggle="modal" data-target="#exampleModal" type="submit" name="action">     <font-awesome-icon style="color:white;font-size:20px;position:relative;top:2.5px;margin-right:5px;transform:rotate(-45deg)" icon="plus" />
              ยกเลิก
            </button>
          </div>
          </div>
         </div>
        </div>
      </div>
    </transition>
    <div class="col-11 mt10" style="position:relative;height:31px;">
    <div   style="z-index: 2;position: absolute; /* text-align: center; */ /* position: relative; */ transform: translateY(-50%); left: 50%;transform:translateX(-50%)">
     <ul class="pagination animationstart3" style="z-index: 2;margin-top:5px;left:50%;transform:translateX(-50%);">
     <!-- <li @click="prevpageb()" class="waves-effect"><a href="#!" style="color:#42a5f5;" ><</a></li> -->
    <!-- <li class="active"><a href="#!"></a></li> -->
    <ul v-for="(val,index) in page" style="z-index: 2;" >
    <li class="waves-effect"  :class="{active: coloractive === index}"  @click="clickpage(index)"><a href="#!">{{val}}</a></li>
  </ul>
  <!-- <li @click="nextpageb()" class="waves-effect"><a href="#!" style="color:#42a5f5;">></a></li> -->
  </ul>
  </div>
  </div>
    <div class="col-md-12 animationstart4" style="overflow:auto;padding-left:0;;padding-right: 5px; padding-bottom: 5px;margin-top:5px;">
      <table  class="highlight  bordercolor" style="margin-top:10px;box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);padding-right:5px;padding-bottom:5px">
        <thead>
          <tr>
            <th>รหัส</th>
            <th>ชื่อ</th>
            <th>รหัสผู้ใช้</th>
            <th>เบอร์โทรศัพท์</th>
            <th>สำนักงาน</th>
            <th>แผนก</th>
            <th>สถานะ</th>
            <!-- <th>Edit</th> -->
          </tr>
        </thead>
        <tbody >
          <tr v-for="data in objuser"  >
            <td style="text-align:center"  data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)">{{ data.sale_code}}</td>
            <td data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)">{{ data.user_name}}</td>
            <td data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)">{{ data.user_code}}</td>
            <td data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)">{{ data.telephone}}</td>
            <td data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)">{{ data.profitcenter_name}}</td>
            <td data-toggle="modal" data-target="#detailuser" @click="detailprofile(data)" >{{ data.department_code}}</td>
            <td @click="status0(data,data.active_status)" style="text-align:center;"><div :id="'status'+data.active_status" style="width:100%;height:100%;text-align:center;">{{ changestatus(data.active_status) }}</div></td>
          </tr>
        </tbody>
  
      </table>
            </div>
    </div>

       <div class="modal fade" id="detailuser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="z-index: 99;" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title swing-in-right-fwd" id="exampleModalLabel">โปรไฟล์ คุณ <span style="font-weight:bold;">  {{ profile_user }} </span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div  class="col-12">
            <div class="row">
            <div class="col-6 col-sm-5 menupm" :style="{top:topuser}" >
        <div  class="card-panel grey lighten-5 z-depth-1 waves-effect" @click="profileuser" style="padding: 0;cursor:pointer;display: block;
     overflow: hidden; height: 50px;">
          <div class="row valign-wrapper"  style="transition:all 0.5s;" :style="{background: backgrounduser}">
            <div class="col s2">
              <img src="../assets/profile.png" style="max-width: 100%; height: 50px; width: 50px;z-index:5" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
              <span class="black-text" style="white-space: nowrap;">
                  โปรไฟล์
              </span>
            </div>
          </div>
        </div>
          </div>
             <div class="col-6 col-sm-5 menupm" :style="{top:topper}" >
        <div  class="card-panel grey lighten-5 z-depth-1 waves-effect" @click="permissionuser" style="padding: 0;cursor:pointer;display: block;overflow: hidden; height: 50px;">
          <div class="row valign-wrapper" style="transition:all 0.5s;" :style="{background: backgroundper}">
            <div class="col s2">
              <img src="../assets/permission.png" style="max-width: 100%; height: 50px; width: 50px;z-index:5" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
              <span class="black-text" style="white-space: nowrap;">
                  กำหนดสิทธิ
              </span>
            </div>
          </div>
        </div>
          </div>
      </div>
      <!-- profile -->
      <div v-show="!profile_active_status" style="color:red;text-align:center;font-size:30px;">คนนี้ได้ลาออกไปแล้ว</div>
      <div v-show="swich_pro_permis == 0 && profile_active_status" style="box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);position: relative; top: -3px;border: 1px solid rgba(0, 0, 0, 0.25); padding: 15px 15px;">
        <div class="col-12 pdleft0">
        <div class="row">
          <div class="col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="name" v-model="profile_name" type="text" class="validate">
            <label class="alwayactive" for="name">ชื่อ - นามสกุล</label>
          </div>
        </div>
        <div class=" col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="telephone" v-model="profile_telephone" type="text" class="validate">
            <label class="alwayactive"  for="telephone">เบอร์โทรศัพท์</label>
          </div>
        </div>
        </div>
        </div>
         <div class="col-12 pdleft0">
        <div class="row">
          <div class=" col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="Username" v-model="profile_user_code" type="text" class="validate">
            <label  class="alwayactive" for="Username">Username</label>
          </div>
        </div>
        <div class=" col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="Username" v-model="profile_password" type="text" class="validate">
            <label  class="alwayactive" for="Password">Password</label>
          </div>
        </div>
        </div>
        </div>
        <div class="col-12 pdleft0">
        <div class="row">
          <div class=" col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="E-mail"  type="text" class="validate">
            <label  class="alwayactive" for="E-mail">E-mail</label>
          </div>
        </div>
        <div class=" col-6">
          <div class="input-field formuser" style="position:relative">
            <input style="position:relative;width:100%" id="nickname" type="text" class="validate">
            <label  class="alwayactive" for="nickname">ชื่อเล่น</label>
          </div>
        </div>
        </div>
        </div>
<div class="col-12 pdleft0">
        <div class="row">
         <div class="col-6" style="position:relative;text-align:center;white-space: nowrap;">
      สถานที่ทำงาน :
        <!-- สาขา : {{ profile_branch_code }} -->
      <select v-model="profile_branch_code2" id="profile_branch" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectbranch" :key="val.id" :value="val.id">{{val.branch_code}}</option>
      </select>
      </div>
      <div class="col-6" style="padding-left: 0px;position:relative;text-align:center;white-space: nowrap;">
        แผนก :
       <!-- หน่วยงาน : {{ profile_department_name }} -->
      <select v-model="profile_department_name2" class="form-control selectadduser" name="sellist1">
        <option  v-for="val in selectdepartment" :key="val.id" :value="val.id" >{{val.department_name}}</option>
      </select>
          </div>
      </div>
        </div>

<div class="col-12 pdleft0">
        <div class="row">
         <div class="col-6" style="position:relative;text-align:center;white-space: nowrap;">
      สำหรับจัดซื้อ :
       <!-- แผนก : {{ profile_expert_name }} -->
      <select v-model="profile_expert_name2" class="form-control selectadduser" name="sellist1">
        <option :key="val.id" v-for="val in selectexpert" :value="val.id">{{ val.expert_code}}</option>
      </select>
      </div>
      <div class="col-6" style="padding-left: 0px;position:relative;text-align:center;white-space: nowrap;">
         ศูนย์ธุรกิจ :
         <!-- Profitcenters : {{ profile_profitcenter_name }} -->
      <select  v-model="profile_profitcenter_name2"  class="form-control selectadduser" name="sellist1">
        <option :key="val.id" v-for="val in selectprofitcenter" :value="val.id">{{val.profitcenter_name}}</option>
      </select>
          </div>
      </div>
        </div>
        </div>
      <!-- profile -->
       <!-- permission -->
      <div v-show="swich_pro_permis == 1 && profile_active_status">
        <table class="highlight animationtext2 bordercolor" style="margin-bottom:20px;">
        <thead>
          <tr >
            <th>ลำดับ</th>
            <th>ชื่อแอพ</th>
            <th>สิทธิ</th>
            <th>แก้ไขสิทธิ</th>
          </tr>
        </thead>
        <tbody >
          <tr :key="val.id" id="center" v-for="(val,index) in objectapp">
            <td style="text-align:center;">{{ index+1 }}</td>
            <td style="text-align:center;">{{ val.app_name}}</td>
            <td style="text-align:center;">{{val.role_name}}</td>
            <td style="position:relative" > 
              <font-awesome-icon style="position: absolute; right: 50px; top: 50%; z-index: 99; transform: translateY(-50%);" icon="pencil-alt" />
              <select v-model="editrole" @change="savepermission(val,index)"  class="form-control selectadduser" style="width:90%;" name="sellist1">
        <option v-for="val in roleobj" v-show="val.active_status" :key="val.id" :value="val.id">{{ val.role_name }}</option>
      </select></td>
            </tr>
        </tbody>
      </table>
      <transition name="fade">
            <div style="position:relative;text-align:center" v-show="showper">
               <span style="font-weight:bold;">สิทธิที่ต้องการเพิ่ม</span>
               
<table  class="highlight bordercolor" style="float:left;">
        <thead>
          <tr >
            <th>ชื่อแอพ</th>
            <th>สิทธิ</th>
            <th>เพิ่ม</th>
          </tr>
        </thead>
        <tbody >
          <tr class="nohover" id="center" >
              <td style="text-align:center">
                 <select v-model="selectaddapp"  class="form-control selectadduser" style="width:90%;" name="sellist1">
        <option v-for="value in allappselect" v-if="value.app_code != ''" v-show="value.active_status" :key="value.id" :value="value.id">{{value.app_name}}</option>
      </select>
              </td>
              <td style="text-align:center">
      <select v-model="selectaddrole"   class="form-control selectadduser" style="width:90%;" name="sellist1">
        <option v-for="val in roleobj" v-show="val.active_status" :key="val.id" :value="val.id">{{val.role_name}}</option>
      </select></td>
             <td style="text-align:center;">
               <button @click="addperinapp" type="button" class="btn green accent-2" style="position: relative;" >เพิ่ม</button>
               </td>
            </tr>
        </tbody>
      </table>
            </div>
            </transition>
        </div>
      <!-- permission -->
      </div>
      </div>
      <div class="modal-footer swing-in-right-fwd5">
         <button @click="showper = !showper "  v-show="swich_pro_permis == 1 && profile_active_status" type="button" class="btn green accent-2" style="right: 25px; position: relative;" >เพิ่มสิทธิ</button>
        <!-- <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button> -->
        <button @click="saveprofile" v-show="swich_pro_permis == 0 && profile_active_status" type="button" class="btn green accent-2" style="right: 25px; position: relative;" >บันทึกข้อมูล</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script src="../js/User.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/User.css" scoped>
</style>
