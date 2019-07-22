<template>
  <div >
    <menu-nav :key="$route.params.id_tipo_material" :data="tablasImportant"></menu-nav>
   <main>
      <list-categoria-material :key="'mat'+$route.params.id_tipo_material" :data="materiales_filtrados"></list-categoria-material>
    </main>
  </div>
</template>
<script>
import MenuNav from "../LandingPage/MenuNav";
import ListCategoriaMaterial from "../Materiales/ListCategoriaMaterials";
import JsonMaterial from "../../store/json/cubavisu_db.json";
export default {
  name: "landing-page",
  components: { MenuNav, ListCategoriaMaterial },
  data() {
    console.log(this.$route.params.id_tipo_material);
    var tablasImportant = Array();
    JsonMaterial.forEach(element => {
      if (element["type"] == "table") {
        if (element["name"] == "_m_materiales") {
          tablasImportant.push(element);
        }
        if (element["name"] == "_m_actores") {
          tablasImportant.push(element);
        }
        if (element["name"] == "_c_tipos_materiales") {
          tablasImportant.push(element);
        }
        if (element["name"] == "_m_slides") {
          tablasImportant.push(element);
        }
      }
    });
       var materiales_filtrados = Array();
      tablasImportant[2].data.map(el => {
        if (el["id_tipo_material"] == this.$route.params.id_tipo_material) {
          materiales_filtrados.push(el)
        }
      });
    console.log(materiales_filtrados);
    return { 
      tablasImportant,
      materiales_filtrados
    
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
