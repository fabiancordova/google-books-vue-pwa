<template>
<!-- componente pedimos al usuario que introduzca el nombre del autor y 
mostramos un listado de los libros de este al pulsar un botón -->
  <div class="AuthorForm">
    <div v-if="show">
      <Title msgString="The author" :msgVar='$store.state.nameAuthor'></Title>  
    </div>
    <!-- using bootstrap -->
    <div class="mb-3">
        <label for="author" class="form-label fw-bolder">Author's name</label>
        <input type="text" class="form-control input shadow mb-3 p-3 mb-0 bg-white rounded" id="author" aria-describedby="basic-addon1" v-model="authorGet" @keyup.enter="showBooks">
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="showBooks">Search</button>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "AuthorForm",
    components: {
    Title
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    // Use the computed variable author, in which a get method is implemented to bring 
    // the variable's content and a set method, which executes the LOAD_AUTHOR mutation 
    // to be able to modify its state.
    authorGet: {
      get() {
        return this.$store.state.author;
      },
      set(value) {
        this.$store.commit("LOAD_AUTHOR", value);
      }
    }
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.author ) {      
        this.$store.state.nameAuthor= this.$store.state.author;
        this.$store.dispatch("GET_BOOKS");
        this.show= true;
        return this.authorGet='';
      }
      else {
        alert('Enter an author, please.');
      }
    }
  }
}
</script>

<style scoped>
.caja {
  box-shadow: 0 0 10px gray;
  border-style: none;
  width: 100%;
  height: 40px;
}
</style>