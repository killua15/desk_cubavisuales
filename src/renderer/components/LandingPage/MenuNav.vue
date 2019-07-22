<template class="menu-mio">
  <el-menu
    :default-active="activeIndex"
    active-text-color="#000"
    text-color="#000"
    background-color="#50a8e1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-row>
      <el-col :span="3">
        <el-submenu index="2">
          <template slot="title">Cubavisuales</template>
          <!-- v-for="tipoMaterial in idTipoMaterial" :key="tipoMaterial"  -->
           <el-menu-item v-for="tipoMaterial in idTipoMaterial" :key="tipoMaterial['id_tipo_material']" >
             <router-link :to="{name:'list-categorias', params:{id_tipo_material:tipoMaterial['id_tipo_material'],tipoMaterial:tipoMaterial['tipo_material'], tablas:allMaterials}}">
                {{tipoMaterial['tipo_material']}}
              </router-link>
            </el-menu-item>
         
         
         
        </el-submenu>
      </el-col>
      <el-col :span="2">
        <el-menu-item index="3">Ayuda</el-menu-item>
      </el-col>
      <el-col :span="2">
        <el-menu-item index="4">Oferta</el-menu-item>
      </el-col>

      <el-col style="padding-top:0px"  :offset="6" :span="10">
        <div>
          <el-input placeholder="Buscar en Cubavisuales" v-model="input3" @change="changeAction" class="input-with-select">
           <el-button slot="append" style="margin-right:5px, border-width:1, border-color:black" icon="el-icon-search"></el-button>
          </el-input>
        </div>
         <a href="#">Busquda Avanzada</a>
      </el-col>
       
    </el-row>
  </el-menu>

</template>

<script>
export default {
  data() {
     console.log(this.$route)
    return {
      activeIndex: "1",
      activeIndex2: "1",
       input3: '',
      idTipoMaterial:this.$attrs.data[0].data,
      allMaterials:this.$attrs.data[2].data
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },
    changeAction(v){
      console.log(v)
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
.my_menu{
  background-color: black
}
.el-menu--horizontal {
  background-color: #50a8e1;
}
</style>


