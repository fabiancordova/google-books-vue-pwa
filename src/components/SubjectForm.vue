<template>
<!-- componente pedimos al usuario que introduzca el nombre del autor y 
mostramos un listado de los libros de este al pulsar un botón -->
  <div class="AuthorForm">
    <div v-if="show">
      <Title msgString="The subject" :msgVar='$store.state.nameSubject'></Title>  
    </div>
    <!-- using bootstrap -->
    <div class="mb-3">
        <label for="subject" class="form-label fw-bolder">Subject's name</label>
        <input type="text" class="form-control input shadow mb-3 p-3 mb-0 bg-white rounded" id="subject" aria-describedby="basic-addon1" v-model="subjectGet" @keyup.enter="showBooks">
    </div>
    <button type="submit" class="btn btn-primary" @click="showBooks">Search</button>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "SubjectForm",
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
    subjectGet: {
      get() {
        return this.$store.state.subject;
      },
      set(value) {
        this.$store.commit("LOAD_SUBJECT", value);
      }
    },
  },
  methods: {
    showBooks: function () {
      if (this.$store.state.subject ) {      
        this.$store.state.nameSubject= this.$store.state.subject;
        this.$store.dispatch("GET_SUBJECT");
        this.show= true;
        return this.subjectGet='';
      }
      else {
        alert('Enter an subject, please.');
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