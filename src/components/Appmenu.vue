<template>
  <div class="Appmenu">
    <div class="animationstart1">
      <h4 style="text-align:center;text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);letter-spacing: 8px;
      font-weight: bold;">จัดการแอพ และ เมนู</h4>
    </div>
    <div class="container">
  
      <div class="col-12 col-sm-8 col-md-8 animationstart2 bordercolor" style="float:left">
        <!-- <div style="position:absolute;width:99%;height:120%;border:2px solid rgba(0,0,0,0.25);left:3px;top:-13px;"> </div> -->
        <div class="form-group">
          <div class="col-10 col-sm-10 col-md-10 " style="float:left">
            <div class="input-field col" style="position:relative;margin-top:1.3rem">
              <input style="position:relative" @keyup.enter="Searchitem" v-model="searchi" autofocus id="last_name" type="text" class="validate">
              <label for="last_name">Search</label>
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
        <div class="form-group">
          <div class="input-field col" style="position: relative;"><button data-toggle="modal" data-target="#exampleModal" type="submit" name="action" class="btn waves-effect cyan accent-3"><svg aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14" style="color: white; font-size: 20px; position: relative; top: 2.5px; margin-right: 5px;"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>
            Add App
            </button></div>
        </div>
      </div>
      <div class="col-12 animationstart3" style="overflow:auto;padding-right: 5px; padding-bottom: 5px;padding-left:0;">
        <table class="highlight bordercolor mt10" style="margin-top:25px;float:left;">
          <thead>
            <tr>
              <th>ชื่อแอพ</th>
              <th>รายละเอียด</th>
              <th>สถานะ</th>
              <!-- <th>Edit</th> -->
            </tr>
          </thead>
          <tbody>
            <tr id="tr" v-for="datas in contentobj">
              <td @click="showinfo(datas)" data-toggle="modal" data-target="#showinfomodal">{{ datas.app_code}}</td>
              <td @click="showinfo(datas)" data-toggle="modal" data-target="#showinfomodal">{{ datas.description}}</td>
              <td @click="onapp(datas,datas.active_status)">
                <div :class="bg = 'status'+datas.active_status" style="width:100%;height:100%;color:white;" align="center">{{ returnactive(datas.active_status) }}</div>
              </td>
              <!-- <td style="position:relative;text-align:center"> <font-awesome-icon v-show="datas.active_status == 0" class="fontawecolorgreen"  icon="check" />
               <font-awesome-icon v-show="datas.active_status == 1" class="fontawecolorred" @click="turnoffapp(datas)"  icon="ban" /></td> -->
            </tr>
          </tbody>
        </table>
      </div>
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
                <input type="text" placeholder="รหัสแอพ" v-model="appcodec" class="form-control2">
              </div>
            </div>
            <div class="containmodal animationtext2">
              <div class="containfont">
                <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="tag" />
              </div>
              <div class="containtext">
                <input type="text" placeholder="ชื่อแอพ" v-model="appnamec" class="form-control2">
              </div>
            </div>
  
            <div class="containmodal animationtext3" style="height:60px;">
              <div class="containfont">
                <font-awesome-icon style="color:white;font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" icon="info" />
              </div>
              <div class="containtext">
                <textarea class="form-control" v-model="detailc" placeholder="รายละเอียด"></textarea>
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
            <h5 class="modal-title animationtextf" id="exampleModalLabel">แอพ {{ topicmodal }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body" v-show="!active_status">
            <div style="color:red;text-align:center;font-size:30px;">แอพ {{ topicmodal }} นี้ไม่มีในระบบ</div>
          </div>
          <div class="modal-body" v-show="active_status">
            <button type="button" @click="showeditapp = !showeditapp" class="btn green accent-2 "><div v-show="!showeditapp">แก้ไขแอพ</div><div v-show="showeditapp">ย้อนกลับ</div></button>
            <div v-show="showeditapp">
              <div style="margin-top:10px;">
                <p style="font-size:25px;font-weight:bold;text-align:left;">แก้ไขแอพ</p>
                รหัสแอพ<input v-model="app_code" type="text" class="form-control"> ชื่อแอพ
                <input v-model="app_name" type="text" class="form-control"> รายละเอียด
                <input v-model="description" type="text" class="form-control">
              </div>
  
            </div>
            <div v-show="!showeditapp">
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
                      <font-awesome-icon class="fontmodal" style="left: -15px;" icon="user" />
                    </div>
                  </div>
                  <div class="input-field col s12 animationtext3" style="border-bottom: 1px solid #e9ecef;padding-bottom:10px;text-align:center;">
  
                    <input id="description" v-model="addmenudescription" style="width:98.5%" type="text" class="validate">
                    <label for="description" style="left: 15px;">Description</label>
                    <font-awesome-icon class="fontmodal" style="left: -2px;" icon="info" />
                    <button type="button" class="btn pink lighten-2" @click="addmenusub">บันทึกข้อมูล</button>
                  </div>
                </div>
              </div>
              <div style="margin-top:10px;text-align:center;">
                <h5 v-show="!showeditmenu" style="font-weight:bold;">ตารางเมนู</h5>
  
                <div style="text-align:left;border:1px solid rgba(0,0,0,0.25);padding:10px" v-show="showeditmenu">
                  <div style="margin-bottom:5px;text-align:center;">
                    <button v-show="showeditmenu" type="button" @click="showeditmenu = !showeditmenu" style="float:right;" class="btn green accent-2 ">ย้อนกลับ</button>
                    <h5 v-show="showeditmenu" style="font-weight:bold;">แก้ไขเมนู</h5>
                  </div>
                  รหัสเมนู <input v-model="menu_code" type="text" class="form-control"> ชื่อเมนู <input v-model="menu_name" type="text" class="form-control"> รายละเอียดเมนู <input v-model="menu_description" type="text" class="form-control">
                  <button type="button" @click="data_editmenu" style="float:right;min-height:36px;margin-top:10px;" class="btn green accent-2 ">บันทึก</button>
                  <br>
                  <br>
                </div>
  
  
                <table v-show="!showeditmenu" class="highlight  bordercolor" style="float:left;">
                  <thead>
                    <tr>
                      <th>ชื่อเมนู</th>
                      <th>รายละเอียด</th>
                      <th>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="center" v-for="value in contentmodal">
                      <td style="cursor:pointer" @click="editmenu(value), showeditmenu = !showeditmenu">{{ value.menu_name}}</td>
                      <td style="cursor:pointer" @click="editmenu(value), showeditmenu = !showeditmenu">{{ value.description}}</td>
                      <td style="cursor:pointer" @click="statusmodal1(value,value.active_status)">
                        <div :class="'status'+value.active_status" style="width:100%;height:100%;color:white;">{{ returnactive(value.active_status) }} </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
  
  
          </div>
          <div class="modal-footer">
            <button v-show="showeditapp && active_status" type="button" @click="editapp_button" style="float:right;" class="btn green accent-2 ">บันทึก</button>
            <button v-show="!showeditapp && active_status" @click="togglemenufun" type="button" class="btn green accent-2 ">เพิ่มเมนู</button>
            <button v-show="!showeditapp && active_status" type="button" class="btn orange darken-3" data-dismiss="modal">Close</button>
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
