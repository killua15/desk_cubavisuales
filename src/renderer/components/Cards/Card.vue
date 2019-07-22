<template >
  <el-card class="box-card">
      <imagen :data="imagen"></imagen>
      <el-link  class="texto" type="primary">{{truncateTrext(material['titulo'],28)}}</el-link>
  </el-card>
</template>
<script>
import Imagen from "../Images/Imagen";
//import ImagenData from "../../assets/img/"this.$attrs.data["materials"]["imagen"]
export default {
  name: "landing-page",
  components: { Imagen },
  data(){
   // console.log(this.$attrs.data["materials"]['imagen'])
    // console.log(this.$attrs.data["materials"]['imagen'])
     var imagen = `/img/dragons_riders_of_berk_dragons_defenders_of_berk_how_to_train_your_dragon_tv_series-142532252-mmed.jpg`
    // console.log(imagen)
    return {
      material:this.$attrs.data["materials"],
     imagen:this.$attrs.data["materials"]['imagen']
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    truncateTrext(text,longTrucate){
     // console.log(text.length)
        if(text.length > longTrucate){
            return text.substring(0, longTrucate) + "..."
        }else{
           return text
        }
       
    }

  }
};
</script>


<style>
.text {
  font-size: 14px;
}
.texto{
  margin-top: 20px
}
.myHeaderCard {
  font-size: 12px;
  color: #50a8e1
}
.box-card {
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height:330px;

    .el-card__body{
      padding: 10px;
    }
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 200%;
    margin: 4px 0;
}
</style>