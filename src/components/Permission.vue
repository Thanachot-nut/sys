<template>
  <div class="Per">
           <div class="animationstart1" style="text-align:center;"><h4 style="text-align:center;text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);letter-spacing: 8px;
    font-weight: bold;">จัดการ Permission</h4></div>
      <div class="container">
          <div class="row">

        
       <div  class="col-12 col-sm-12 col-md-3 rela  animationstart3" style="display:inline-block;margin-top:10px;">
            <div class="row">
            <div class="col-11 bordercolor">
               <!-- table  -->
        <table class="highlight" style="margin-top:10px;float:left;">
          <tr>
            <td style="font-weight:bold;text-align:center;font-size:1.5rem;">
               <font-awesome-icon  icon="apple-alt" />  APP
            </td>
          </tr>
        <tbody>
          <tr v-for="(val,index) in appall">
            <td :class="{active: colorapp === index}" @click="showrole(val,index)" >{{checknovalue(val.app_name)}}</td>
          </tr>
        </tbody>
      </table>
               <!-- table -->
           </div>
       </div>
        <font-awesome-icon v-show="apptorole != '' && autoanimation == 1 " :class="{animationstartfont: autoanimation}" class="rightawe "  icon="chevron-right" />
      </div>
     
      <div v-show="apptorole != ''" :class="{animationstart3: autoanimation}" class="col-12 col-sm-12 col-md-3 rela" style="display:inline-block;margin-top:10px;">
      <div class="row">
        <div class="col-11 bordercolor ">
           <table class="highlight  " style="margin-top:10px;float:left;">
          <tr>
            <td style="font-weight:bold;text-align:center;font-size:1.5rem;">
               <font-awesome-icon  icon="address-card" />   Role</td>
          </tr>
        <tbody>
          <tr v-for="(val,index) in apptorole">
            <td :class="{active: colorrole === index}"  @click="permissions(val,index)" >{{checknovalue(val.role_name)}}</td>
          </tr>
           </tbody>
          <tr id="nohover">
            <td colspan="5" style="text-align:center;postion:relative">
              <div style="position:relative;left:50%;transform:translateX(-50%);width:50%;margin: 9px 0;">
           <button  data-toggle="modal" data-target="#exampleModal" style="position:relative;background:#81c784" class="btn btn-info btn-lg btn-block waves-effect" @click="Addrole(apptorole)">Add</button>
           </div>
           </td>
          </tr>
       
      </table>
      </div>
      <font-awesome-icon v-show="permissionall != ''" class="rightawe animationstartfont" icon="chevron-right" /></div> 
      </div>

      <div v-show="permissionall != ''"  class="col-12 col-sm-12 col-md-6 animationstart3" style="display:inline-block;margin-top:10px;">
         <div class="row">
         <div class="col-12 col-sm-11 bordercolor" style="overflow:auto">
               <table class="highlight " style="margin-top:10px;float:left;">
          <tr>
            <td colspan="5" style="font-weight:bold;text-align:center;font-size:1.5rem;">
                <font-awesome-icon  icon="unlock" /> Permission</td>
          </tr>
          <tr>
            <td style=";text-align:center;font-size:1rem;">เมนู</td>
             <td style="text-align:center;font-size:1rem;">สร้าง</td>
             <td style="text-align:center;font-size:1rem;">ดู</td>
             <td style="text-align:center;font-size:1rem;">แก้ไข</td>
             <td style="text-align:center;font-size:1rem;">ลบ</td>
          </tr>
      
          <tr  id="nohover" v-for="val in permissionall">
            <td  @click="permissions(val)" >{{checknovalue(val.menu_name)}}
            </td>
          <td><p>
<label>
<input type="checkbox" @click="is_create(val)" :checked="val.is_create" />
<span>สร้าง</span>
</label>
</p></td>
<td>
  <p>
<label>
<input type="checkbox"  @click="is_read(val)" :checked="val.is_read" />
<span>อ่าน</span>
</label>
</p>
</td>
<td>
  <p>
<label>
<input type="checkbox"  @click="is_update(val)" :checked="val.is_update" />
<span>แก้ไข</span>
</label>
</p>
</td>
<td>
  <p>
<label>
<input type="checkbox"  @click="is_delete(val)" :checked="val.is_delete" />
<span>ลบ</span>
</label>
</p>
</td>
          </tr>
          <tr id="nohover">
            <td colspan="5" style="text-align:center;postion:relative">
              <div style="position:relative;left:50%;transform:translateX(-50%);width:50%;margin: 9px 0;">
           <button  style="left:15px;position:relative;background:#81c784" class="btn btn-info btn-lg btn-block waves-effect" @click="submitpermission(permissionall)">ตกลง</button>
           </div>
           </td>
          </tr>
       
      </table>
         </div>
         </div>
      </div>
      </div>
      
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title animationstart1" id="exampleModalLabel">เพิ่ม Role</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <table class="highlight responsive-table animationstart1 bordercolor" style="margin-top:10px;float:left;">
        <thead>
          <tr >
            <th>ชื่อ Role</th>
            <th>รายละเอียด</th>
            <th>เพิ่ม</th>
          </tr>
        </thead>  
        <tbody>
          <tr id="roleid" v-for="val in roleobj" >
            <td style="padding-left:20px;">{{val.role_name}}</td>
             <td style="padding-left:20px;">{{val.description}}</td>
               <td style="padding:8px 0;text-align: center;"><button  v-show="closebutton" data-toggle="modal" data-target="#exampleModal" style="position:relative;background:#81c784;    width: 100px;
    height: 26px;" class="btn btn-info btn-lg btn-block waves-effect" @click="addroleinapp(val)"><span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">เพิ่ม Role</span></button></td>
          </tr>
        </tbody>
      </table>

      </div>
      <!-- <div class="modal-footer animationtext4">
        
        <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
        <button type="button" class="btn green accent-2" >Save</button>
      </div> -->
    </div>
  </div>
</div>
  </div>
</template>

<script src="../js/Permission.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Permission.css" scoped>
</style>
