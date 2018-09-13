<template>
  <div class="User">
    <div class="animationstart animationstart1 " style="text-align:center;"><h4>Mange User</h4></div>
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
            <label style="left:96px;" for="usercode_add">Usercode</label>
          </div>
          <div class=" col-12 col-sm-5" style="position:relative;text-align:center;white-space: nowrap;">
        <!-- <label for="sel1">Select list (select one):</label> -->
        กรุณาเลือกสาขา
      <select v-model="V_selectbranch" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectbranch" :value="val.id">{{val.branch_code}}</option> 
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
            <label style="left:96px;" for="username_add">Username</label>
          </div>
            <div class=" col-12 col-sm-5" style="position:relative;text-align:center;white-space: nowrap;">
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
            <label  style="left:96px;" for="Password">Password</label>
          </div>
           <div class="col-12 col-sm-5" style="position:relative;text-align:center;white-space: nowrap;">
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
            <label  style="left:96px;" for="Phone">Phone</label>
          </div>
          <div class=" col-12 col-sm-5" style="position:relative;text-align:center;white-space: nowrap;">
       กรุณาเลือก Profitcenters
      <select v-model="V_profitcenter" class="form-control selectadduser" name="sellist1">
        <option v-for="val in selectprofitcenter" :value="val.id">{{val.profitcenter_name}}</option> 
      </select>
          </div>
           </div>
          </div>
          <!--  -->
          <div class="row animationstart6" style="text-align:center;">
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
    <div   style="position: absolute; /* text-align: center; */ /* position: relative; */ transform: translateY(-50%); left: 50%;">
     <ul class="pagination animationstart3" style="margin-top:5px;left:50%;transform:translateX(-50%);">
     <!-- <li @click="prevpageb()" class="waves-effect"><a href="#!" style="color:#42a5f5;" ><</a></li> -->
    <!-- <li class="active"><a href="#!"></a></li> -->
    <ul v-for="(val,index) in page" >
    <li class="waves-effect"  :class="{active: coloractive === index}"  @click="clickpage(index)"><a href="#!">{{val}}</a></li>
  </ul>
  <!-- <li @click="nextpageb()" class="waves-effect"><a href="#!" style="color:#42a5f5;">></a></li> -->
  </ul>
  </div>
      <table  class="highlight responsive-table animationstart4 bordercolor" style=";margin-top:40px;">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>Username</th>
            <th>เบอร์โทรศัพท์</th>
            <th>สำนักงาน</th>
            <th>แผนก</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody >
          <tr id="tr" v-for="data in objuser">
            <td>{{ data.user_name}}</td>
            <td>{{ data.user_code}}</td>
            <td>{{ data.telephone}}</td>
            <td>{{ data.profitcenter_name}}</td>
            <td>{{ data.department_code}}</td>
            <td style="text-align:center;"><div :id="'status'+data.active_status" style="width:100%;height:100%;text-align:center;">{{ changestatus(data.active_status) }}</div></td>
             <td style="position:relative;width:auto;text-align:center"> <font-awesome-icon v-show="data.active_status == 0" class="fontawecolorgreen" @click="status0(data)" icon="check" />
             <font-awesome-icon v-show="data.active_status == 1" class="fontawecolorred" @click="status1(data)"  icon="ban" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="../js/User.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/User.css" scoped>
</style>
