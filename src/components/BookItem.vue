<template>
  <div>
    <div class="card mb-3" style="max-width: 440px;">
      <div class="row g-0">
        <div class="col-md-4">
                <img
                  v-if="!book.imageLinks"
                  src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
                  class="img-fluid rounded-start"
                  alt="smiley face"
                  width="128px"
                />
                <img v-else :src="book.imageLinks.thumbnail" alt="Real Image" />

        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text"><small class="text-muted">{{ book.authors[0] }}</small></p>
            <!-- abrir una nueva ventana con target="_blank"  -->
            <p> <a :href="book.infoLink" target="_blank"><button type="button" class="btn btn-primary">Read More</button></a> </p>     
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"]
}
</script>
