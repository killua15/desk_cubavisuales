<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button @click="$router.go(-1)" type="primary" icon="el-icon-back" circle></el-button>
      </el-col>
      <el-col :span="5">
        <div class="block">
          <el-image :src="image"></el-image>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="block">
          <span style="font-size: 35px; font-; ">{{material['titulo']}}</span>
        </div>
        <div class="block">
          <span style="font-size: 20px; font- ">Categoria:</span>
          <span style="font-size: 20px;  ">{{material['id_tipo_material']}}</span>
        </div>
        <div class="block">
          <span style="font-size: 20px; font- ">Duracion:</span>
          <span v-if="material['duracion']==''" style="font-size: 20px;  ">0 min</span>
          <span v-else style="font-size: 20px;  ">{{material['duracion'] }}</span>
        </div>
        <div class="block">
          <span style="font-size: 20px; font- ">Nacionalidad:</span>
          <span style="font-size: 20px; ">{{material['pais']}}</span>
        </div>
        <div class="block">
          <span style="font-size: 20px; font- ">Tamaño:</span>
          <span style="font-size: 20px;  ">{{material['tamano']}} GB</span>
        </div>
        <div class="block">
          <span style="font-size: 20px; font- ">Director:</span>
          <span style="font-size: 20px;  ">{{material['director']}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="block">
        <el-col :span="24">
          <span style="font-size: 20px; font- ">Sinopsis:</span>
        </el-col>
        <span style="font-size: 20px;  ">{{material['sinopsis']}}</span>
      </div>
    </el-row>
       <el-row>
      <div class="block">
        <el-col :span="24">
          <span style="font-size: 20px; font- ">Productora:</span>
        </el-col>
        <span style="font-size: 20px;  ">{{material['productora']}}</span>
      </div>
    </el-row>
      <el-row>
      <div class="block">
        <el-col :span="24">
          <span style="font-size: 20px; font- ">Reparto:</span>
        </el-col>
        
      </div>
       <el-row  v-for="i in 10" :key="i">
            <el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
      </el-row>
    </el-row>
  </div>
</template>
<script>
// import MenuNav from "../LandingPage/MenuNav";
// import ListCategoriaMaterial from "../Materiales/ListCategoriaMaterials";
// import JsonMaterial from "../../store/json/cubavisu_db.json";
const fs = require("fs");
import ImagenView from "../Images/ImagenView";
import carousel from 'vue-owl-carousel'
import ImagenP from '../Images/Imagen'


export default {
  name: "landing-page",
  components: { ImagenView},
  data() {
    var img;
    console.log(`${__dirname}/img/${this.$route.params.material.imagen}`);
    try {
      if (
        fs
          .statSync(`${__dirname}/img/${this.$route.params.material.imagen}`)
          .isFile()
      ) {
        img = require(`${__dirname}/img/${this.$route.params.material.imagen}`);
        //console.log(path.resolve(__dirname, "../"))
      } else {
        //img = require(`${__dirname}/img/00.jpg`)
      }
    } catch (error) {
      img = null;
    }
    return {
      image: img,
      material: this.$route.params.material
    };
  },
  methods: {
    cargarData() {}
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

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100%;
  width: 100%;
}
.block {
  margin-top: 10px;
}
#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 100%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
