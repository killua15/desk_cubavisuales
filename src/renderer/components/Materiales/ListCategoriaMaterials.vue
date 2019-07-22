<template >
  <el-row>  
     <el-row>
         <el-col :span="24" :offset="10">  <span style="font-size: 20px; font- ">{{tipoMaterial}}</span></el-col> 
    </el-row>
    <el-row>
      <el-col  v-for="materials in allMaterials.slice((pageNumber*20)-20,pageNumber*20)" :key="materials['id_material']" class="card_style" :span="5">
        <card  :data="{materials}"></card>
      </el-col>
    </el-row>
    <el-row>
    </el-row>
    <el-row>
      <el-col :offset="6">
        <el-pagination @current-change="changePage" :page-size="20" :pager-count="11" layout="prev, pager, next" :total="totalmisMat"></el-pagination>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import Card from "../Cards/Card";
import CardClassic from '../Cards/CardClassic'
const fs  = require('fs')

export default {
  name: "landing-page",
  components: { Card,CardClassic },
   data() {
    console.log(this.$route.params.id_tipo_material);
     //console.log(fs.statSync(`src/renderer/components/Images/img/00.jpg`).isFile())
     var misMat = Array()
     this.$route.params.tablas.forEach(element => {
       //  try {
         //console.log(fs.statSync(`${__dirname}/img/${this.$attrs.data}`).isFile())
      //if(fs.statSync(`src/renderer/components/Images/img/${element['imagen']}`).isFile()){
           //img = require(`${__dirname}/img/${this.$attrs.data}`) 
           //console.log(path.resolve(__dirname, "../"))
           //console.log(element["id_tipo_material"]);
            if (element["id_tipo_material"] == this.$route.params.id_tipo_material) {
             misMat.push(element)
        }
             
      // }else{
      //    //img = require(`${__dirname}/img/00.jpg`) 
      //    console.log("error if");
      // }
      // } catch (error) {
      //   console.log("error catch");
      // }
    });
   this.pag = 20
   console.log(misMat);
    return {
      idTipoMaterial:this.$route.params.id_tipo_material,
      tipoMaterial:this.$route.params.tipoMaterial,
      allMaterials:misMat.reverse(),
      totalmisMat:misMat.length,
      pageNumber:1
      //clasicos : clasicos
    };
  },
  computed :{
      displayedmaterials(){
        console.log("q pasa")
      }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    changePage(e){
     
      this.pageNumber = e
      console.log(this.allMaterials)
      
     // allMaterials((e*20)-20,e*20)
    }
  }
};
</script>



<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.card_style {
  margin-left: 20px;
  margin-right: 20px;
}
.el-row {
  margin-left: 30px;
  margin-right: 30px;
}
.el-col {
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>




