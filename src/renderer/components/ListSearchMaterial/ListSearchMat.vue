<template >
  <div>
    <menu-nav :key="'as'" :data="tablasImportant"></menu-nav>
    <main>
      <list-search-materials :key="'sch'+$route.params.titulo" :data="materialesSearch"></list-search-materials>
    </main>
  </div>
</template>
<script>
import Card from "../Cards/Card";
import CardClassic from "../Cards/CardClassic";
const fs = require("fs");
import MenuNav from "../LandingPage/MenuNav";
import ListSearchMaterials from "../ListSearchMaterial/ListSearchMaterials";
import JsonMaterial from "../../store/json/cubavisu_db.json";
import { eventBus } from "../../mainBus";
export default {
  name: "landing-page",
  components: { MenuNav, ListSearchMaterials },
  props: {
    searchMat: {
      validator: function(value) {
        console.log("ahora si");
      }
    }
  },
  beforeUpdate() {
    console.log(this.materialesSearch);
    console.log(this.tablasImportant);
    this.tablasImportant = Array();
    JsonMaterial.forEach(element => {
      if (element["type"] == "table") {
        if (element["name"] == "_m_materiales") {
          this.tablasImportant.push(element);
        }
        if (element["name"] == "_m_actores") {
          this.tablasImportant.push(element);
        }
        if (element["name"] == "_c_tipos_materiales") {
          this.tablasImportant.push(element);
        }
        if (element["name"] == "_m_slides") {
          this.tablasImportant.push(element);
        }
      }
    });
    this.materialesSearch = Array();
    for (let i = 0; i < this.tablasImportant[2].data.length; i++) {
      let t = "";
      t = this.tablasImportant[2].data[i]["titulo"];
      let sch = "";
      
      sch = this.$route.params.titulo;
      console.log("Aqui esta titulo de busqueda")
      console.log(sch)
      if (sch != undefined) {
        console.log(sch.toLowerCase());
        if (t.toLowerCase().indexOf(sch.toLowerCase()) > -1) {
          this.materialesSearch.push(this.tablasImportant[2].data[i]);
          console.log(this.tablasImportant[2].data[i]);
        }
      }
     
    }
     console.log(this.materialesSearch);
  },
  data() {
    console.log(this.$route);
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
    var materialesSearch = Array();

    for (let i = 0; i < tablasImportant[2].data.length; i++) {
      let t = "";
      t = tablasImportant[2].data[i]["titulo"];
      let sch = "";
      sch = this.$route.params.titulo;

      if (sch != undefined) {
        console.log(sch.toLowerCase());
        if (t.toLowerCase().indexOf(sch.toLowerCase()) > -1) {
          materialesSearch.push(tablasImportant[2].data[i]);
          console.log(tablasImportant[2].data[i]);
        }
      }
      //console.log(t.toLowerCase());
    }

    return { tablasImportant, materialesSearch };
  },
  computed: {
    displayedmaterials() {
      console.log("q pasa");
    }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    changePage(e) {
      this.pageNumber = e;
      console.log(this.allMaterials);

      // allMaterials((e*20)-20,e*20)
    },
    searchMat() {
      console.log("ahora si");
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




