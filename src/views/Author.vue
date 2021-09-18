<template>
  <div class="Author">
      <!-- <div id="search" class="#f5f5f5 grey lighten-4 z-depth-5">
        <form action="" id="myform">
            <div class="input-field">
                <input type="search" id="books">
                <label for="search">Search Books</label>
            </div>
        </form>
      </div> -->

       <author-form></author-form>

      <book-list></book-list>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import AuthorForm from "@/components/AuthorForm";
import store  from '../store'

export default {
  name: "Author",
  components: {
    BookList,
    AuthorForm,
  },
  mounted() {
    this.getReset();  
  },
  methods: {
    //consumo de API pública de países en el mundo.  
     getReset() {
       store.state.books= [];
     }
  }
}
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}

#search{
    width: 300px;
    height: 150px;
    margin: auto;
    margin-top: 20px;
    padding: 15px;
}

</style>
