<template>
  <div class="NavBar">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="container">
      <img src="../assets/GoogleBooks.png" alt="Bootstrap" width="32" height="32">
      <b-navbar-brand href="#">Google Books</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link to="/Author" class="nav-link active" aria-current="page">Author</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/Subject" class="nav-link" aria-current="page">Subject</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

