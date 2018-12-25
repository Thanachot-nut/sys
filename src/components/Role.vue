<template>
  <div class="Role">
    <div style="text-align:center;"><h4 style="text-align:center;text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);letter-spacing: 8px;
    font-weight: bold;" class="animationstart1">จัดการ Role</h4></div>
      <div class="container">
              
         <div class="col-12 col-sm-8 col-md-8 animationstart1 bordercolor" style="float:left">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group">
            <div class="col-10 col-sm-10 col-md-10 " style="float:left">
           <div class="input-field col" style="position:relative">
            <input style="position:relative" @keyup.enter="showroleall"  v-model="searchrole" autofocus id="last_name" type="text" class="validate">
            <label  for="last_name">Search</label>
            </div>
              </div>
              </div>
              <div class="form-group">
            <div class="col-2 col-sm-2 col-md-2" style="float:left;position:relative;left:-30px;top:5px;">
            <div class="containsearch" @click="showroleall">
                   <font-awesome-icon style="color:white;font-size:25px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="search" />
            </div>
            </div>
              </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 animationstart2" style="float:left;position:relative;">
        <div class="form-group"><div class="input-field col" style="position: relative;"><button data-toggle="modal" data-target="#exampleModal" type="submit" name="action" class="btn waves-effect cyan accent-3"><svg aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14" style="color: white; font-size: 20px; position: relative; top: 2.5px; margin-right: 5px;"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>
          เพิ่ม Role
          </button></div></div>
      </div>
   
    <div class="col-12" style="overflow:auto;padding-right: 5px; padding-bottom: 5px;padding-left:0;">
     <table class="highlight animationstart3 bordercolor mt10" style="margin-top:25px;float:left;">
        <thead>
          <tr >
            <th>ชื่อ Role</th>
            <th>รายละเอียด</th>
            <th>สถานะ</th>
            <!-- <th>Edit</th> -->
          </tr>
        </thead>  
        <tbody>
          <tr v-for="val in roleobj" >
            <td style="cursor:pointer" @click="editrole(val)" data-toggle="modal" data-target="#editrole">{{val.role_name}}</td>
             <td style="cursor:pointer" @click="editrole(val)" data-toggle="modal" data-target="#editrole">{{val.description}}</td>
             <td style="cursor:pointer" @click="onrole(val,val.active_status)"> <div :class="bg = 'status'+val.active_status" style="width:100%;height:100%;text-align:center;">{{ changestatus(val.active_status) }}</div></td>
             <!-- <td style="position:relative;width:10%;text-align:center"> <font-awesome-icon v-show="val.active_status == 0" class="fontawecolorgreen" icon="check" />
             <font-awesome-icon v-show="val.active_status == 1" class="fontawecolorred" @click="turnoffapp(val)"  icon="ban" /></td></tr>
              -->
          </tr>
        </tbody>
      </table>
     </div>
         </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title swing-in-right-fwd" id="exampleModalLabel">ADD ROLE</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="containmodal swing-in-right-fwd2">
          <div class="containfont">
                 <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="terminal" />
          </div>
          <div class="containtext">
            <input type="text" placeholder="รหัส Role" v-model="rolecode" class="form-control2">
            </div>
        </div>
        <div class="containmodal swing-in-right-fwd3">
          <div class="containfont">
                 <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="tag" />
          </div>
          <div class="containtext">
            <input type="text" placeholder="ชื่อ Role" v-model="rolename" class="form-control2">
            </div>
        </div>

         <div class="containmodal swing-in-right-fwd4" style="height:60px;">
          <div class="containfont" >
                <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="info" />
          </div>
          <div class="containtext">
            <textarea class="form-control" v-model="roledescrip" placeholder="คำอธิบาย"></textarea>
          </div>
         </div>

      </div>
      <div class="modal-footer swing-in-right-fwd5">
        
        <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
        <button type="button" class="btn green accent-2" @click="addrole">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- แก้ไข role -->
 <div class="modal fade" id="editrole" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title " id="exampleModalLabel">แก้ไข Role</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
      <div class="modal-body" v-show="active_status">
        รหัส Role : <input v-model="role_code" type="text" class="form-control">
        ชื่อ Role<input v-model="role_name" type="text" class="form-control">
        คำอธิบาย <input v-model="description" type="text" class="form-control">
      </div>
       <div class="modal-body" v-show="!active_status">
        
         <div  style="color:red;text-align:center;font-size:30px;"> Role นี้ยังไม่ได้เปิดให้ใช้งาน </div>
       </div>
      <div class="modal-footer ">
        
        <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
        <button type="button" class="btn green accent-2" @click="addeditrole">Save</button>
      </div>
    </div>
  </div>
</div>
<!-- แก้ไข role -->
  </div>
</template>

<script src="../js/role.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/role.css" scoped>
</style>
