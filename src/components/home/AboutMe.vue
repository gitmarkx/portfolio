<script setup>
</script>

<template>
  <section class="jumbotron text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="display-5 text-white">About Me</h3>
        </div>
        <div class="col-md-8">
          <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron{
  background-color: #171c22;
  padding: 5rem 0;
}

.jumbotron h3{
  font-weight: 500;
}
.jumbotron h3, .jumbotron p{
  text-align: left;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .jumbotron p{
    font-size: 1.25rem;
  }
}
</style>