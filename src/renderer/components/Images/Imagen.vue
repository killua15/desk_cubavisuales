<template>
<!-- <el-row>
  <el-col  > -->
    <el-card class="elemt">
      <el-image height="100%" width="100%" :src="image" class="image"></el-image>
    </el-card>
  <!-- </el-col>
</el-row> -->
</template>
<script>
  const fs  = require('fs')
  export default {
  
    data() {
      var img 
     console.log(fs.statSync(`${__dirname}/img/${this.$attrs.data}`).isFile())
      try {
      
      if(fs.statSync(`${__dirname}/img/${this.$attrs.data}`).isFile()){
           img = require(`${__dirname}/img/${this.$attrs.data}`) 
           //console.log(path.resolve(__dirname, "../"))
      }else{
         //img = require(`${__dirname}/img/00.jpg`) 
      }
      } catch (error) {
        img =null
      }
      console.log(img)
 //console.log(fs.statSync(`${__dirname}`).isFile())
      //var img = require(`@/assets/img/${this.$attrs.data}`)
     //  var img = require(`@/assets/img/00.jpg`)
      //console.log("Logitud"+"--"+img.lenght)
      // if(ima){
      //    img = require(`@/assets/img/00.jpg`)
      // }
      return {
        //image: this.$attrs.data
        image: img
      }
    }
  }
</script>
<style>
   .elemt{
     height: 130px;
     width: 190px
   }
</style>