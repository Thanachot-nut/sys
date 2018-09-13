<template>
  <div class="Appmenu">
    <br>
     <div class="container">
        <div class="animationstart1" style="text-align:center;"><h4 >Mange App and Menu</h4></div>
         <div class="col-12 col-sm-8 col-md-8 animationstart2 bordercolor" style="float:left">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group">
            <div class="col-10 col-sm-10 col-md-10 " style="float:left">
           <div class="input-field col" style="position:relative">
            <input style="position:relative" @keyup.enter="Searchitem" v-model="searchi" autofocus id="last_name" type="text" class="validate">
            <label  for="last_name">Search</label>
            </div>
              </div>
              </div>
              <div class="form-group">
            <div class="col-2 col-sm-2 col-md-2 " style="float:left;position:relative;left:-30px;top:5px;">
            <div class="containsearch" @click="Searchitem">
                   <font-awesome-icon style="color:white;font-size:25px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="search" />
            </div>
            </div>
              </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 animationstart2" style="float:left;position:relative;">
        <div class="form-group"><div class="input-field col" style="position: relative;"><button data-toggle="modal" data-target="#exampleModal" type="submit" name="action" class="btn waves-effect cyan accent-3"><svg aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14" style="color: white; font-size: 20px; position: relative; top: 2.5px; margin-right: 5px;"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>
          Add App
          </button></div></div>
      </div>
      
      <table class="highlight responsive-table animationstart3 bordercolor" style="margin-top:10px;float:left;">
        <thead>
          <tr >
            <th>ชื่อแอพ</th>
            <th>รายละเอียด</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>  
        <tbody  >
          <tr id="tr" v-for="datas in contentobj"  >
            <td @click="showinfo(datas)"  data-toggle="modal" data-target="#showinfomodal">{{ datas.app_code}}</td>
             <td @click="showinfo(datas)"  data-toggle="modal" data-target="#showinfomodal">{{ datas.description}}</td>
            <td @click="showinfo(datas)"  data-toggle="modal" data-target="#showinfomodal"><div :class="bg = 'status'+datas.active_status" style="width:100%;height:100%;color:white;" align="center">{{ returnactive(datas.active_status) }}</div></td>
            <td style="position:relative;text-align:center"> <font-awesome-icon v-show="datas.active_status == 0" class="fontawecolorgreen" @click="onapp(datas)" icon="check" />
             <font-awesome-icon v-show="datas.active_status == 1" class="fontawecolorred" @click="turnoffapp(datas)"  icon="ban" /></td>
            </tr>
        </tbody>
      </table>
     </div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title animationtextf" id="exampleModalLabel">ADD APP</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="containmodal animationtext1">
          <div class="containfont">
                 <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="terminal" />
          </div>
          <div class="containtext">
            <input type="text" placeholder="App Code" v-model="appcodec" class="form-control2">
            </div>
        </div>
        <div class="containmodal animationtext2">
          <div class="containfont">
                 <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="tag" />
          </div>
          <div class="containtext">
            <input type="text" placeholder="App Name" v-model="appnamec" class="form-control2">
            </div>
        </div>

         <div class="containmodal animationtext3" style="height:60px;">
          <div class="containfont" >
                <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="info" />
          </div>
          <div class="containtext">
            <textarea class="form-control" v-model="detailc" placeholder="Detail"></textarea>
          </div>
         </div>

      </div>
      <div class="modal-footer animationtext4">
        
        <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
        <button type="button" class="btn green accent-2" @click="newapp">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- showinfo modal -->
<div class="modal fade" id="showinfomodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" align="center">
        <h5 class="modal-title animationtextf" id="exampleModalLabel">{{ topicmodal }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <button @click="togglemenufun" type="button" class="btn green accent-2 animationtext1">เพิ่มเมนู</button>
         <div v-show="toggleaddmenu == 1">
         <div style="width:100%;height:auto;border-top: 1px solid #e9ecef;padding-top:10px;margin-top:10px;">
            <div class="row" style="margin-left:5px;">
        <div class="input-field col s6 animationtext1">
           
          <input id="first_name" v-model="addmenucode" style="width:95%" type="text" class="validate">
          <label for="first_name">Menu Code</label>
            <font-awesome-icon class="fontmodal" style="left: -15px;" icon="unlock" />
        </div>
        <div class="input-field col s6 animationtext2">
             
          <input id="sur_name" v-model="addmenuname" style="width:95%" type="text" class="validate">
          <label for="sur_name">Menu Name</label>
          <font-awesome-icon class="fontmodal" style="left: -15px;"  icon="user" />
        </div>
      </div>
        <div class="input-field col s12 animationtext3" style="border-bottom: 1px solid #e9ecef;padding-bottom:10px;text-align:center;" >
         
          <input id="description" v-model="addmenudescription" style="width:98.5%" type="text" class="validate">
          <label for="description" style="left: 15px;">Description</label>
          <font-awesome-icon class="fontmodal" style="left: -2px;"  icon="info"  />
           <button type="button"  class="btn pink lighten-2" @click="addmenusub" >บันทึกข้อมูล</button>
        </div>
          
          </div>
   
         </div>
       <table class="highlight responsive-table animationtext2 bordercolor" style="margin-top:10px;float:left;">
        <thead>
          <tr >
            <th>ชื่อเมนู</th>
            <th>รายละเอียด</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>  
        <tbody  >
          <tr id="center" v-for="value in contentmodal" >
            <td>{{ value.menu_name}}</td>
             <td>{{ value.description}}</td>
            <td><div :class="'status'+value.active_status" style="width:100%;height:100%;color:white;">{{ returnactive(value.active_status) }} </div></td>
            <td style="position:relative;width:10%;text-align:center"> <font-awesome-icon v-show="value.active_status == 0" class="fontawecolorgreen" @click="statusmodal1(value)" icon="check" />
             <font-awesome-icon v-show="value.active_status == 1" class="fontawecolorred" @click="statusmodal0(value)"  icon="ban" /></td>
            </tr>
        </tbody>
      </table>
        <!-- <div class="containmodal animationtext2">
          <div class="containfont">
                 <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="tag" />
          </div>
          <div class="containtext">
            <input type="text" placeholder="App Name" v-model="appnamec" class="form-control2">
            </div>
        </div>

         <div class="containmodal animationtext3" style="height:60px;">
          <div class="containfont" >
                <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="info" />
          </div>
          <div class="containtext">
            <textarea class="form-control" v-model="detailc" placeholder="Detail"></textarea>
          </div>
         </div> -->

      </div>
      <div class="modal-footer animationtext4">
        
        <button type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn green accent-2" @click="newapp">Save</button> -->
      </div>
    </div>
  </div>
</div>
<!-- showinfo modal -->
  </div>
</template>

<script src="../js/Appmenu.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/Appmenu.css" scoped>
</style>
