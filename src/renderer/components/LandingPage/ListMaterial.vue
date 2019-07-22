<template >
  <el-row>
    <el-row>
  <el-col :span="24" :offset="10">  <span style="font-size: 20px; font- ">Ultimos Agregados</span></el-col>
</el-row>
   
    <el-row>
      <el-col  v-for="materials in allMaterials.slice(0, 50)" :key="materials['id_material']" class="card_style" :span="5">
        <card  :data="{materials}"></card>
      </el-col>
    </el-row>
    <el-row>
    </el-row>

    <el-row>
  <el-col :span="24" :offset="10">  <span style="font-size: 20px; font- ">Ultimos Clasicos</span></el-col>
</el-row>
     <el-divider></el-divider>
    <el-row>
      <el-col  v-for="materials in clasicos.slice(0, 20)" :key="materials['id_material']" class="card_style" :span="5">
        <card  :data="{materials}"></card >
      </el-col>
    </el-row>
    <el-row>
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
     //console.log(fs.statSync(`src/renderer/components/Images/img/00.jpg`).isFile())
     var misMat = Array()
     this.$attrs.data[2].data.forEach(element => {
         try {
         //console.log(fs.statSync(`${__dirname}/img/${this.$attrs.data}`).isFile())
      if(fs.statSync(`src/renderer/components/Images/img/${element['imagen']}`).isFile()){
           //img = require(`${__dirname}/img/${this.$attrs.data}`) 
           //console.log(path.resolve(__dirname, "../"))
            return  misMat.push(element)
      }else{
         //img = require(`${__dirname}/img/00.jpg`) 
      }
      } catch (error) {
        
      }
    });
      console.log(misMat)
      var clasicos = Array()
      this.$attrs.data[3].data.map(e => {
          this.$attrs.data[2].data.find(el => {
               if(e["id_material"] == el["id_material"])
              clasicos.push(el)
          })
     })
    return {
      idTipoMaterial:this.$attrs.data[0].data,
      allMaterials:misMat.reverse(),
      clasicos : clasicos
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
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

</style>


