<template>
  <div class="footer">
    <footer class="text-center text-white bg-dark">
      <h4>&copy; {{year}} - Fabián Córdova</h4>
    </footer>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear(),
  }),
  }
</script>

<style scoped>
</style>

