<script setup>
</script>

<template>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="display-2 text-white">Hello, <br> I am <b>Mark</b>, <br> Web Developer</h1>
      <br>
      <div class="btnWrap">
        <a href="#contact" class="btn btn-custom-1 btn-lg">Contact Me</a>
        <a href="#resume" class="btn btn-custom-2 btn-lg">Download Resume</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #290941;
}

.jumbotron h1{
  font-weight: 500;
}
.jumbotron h1 b{
  color: #f2bc59;
}
.btn-custom-1{
  background-color: #f2bc59;
  color: #290941;
  border-radius: 50px;
}
.btn-custom-1:hover{
  background-color: #290941;
  color: #f2bc59;
  border: 1px solid #f2bc59;
}
.btn-custom-2{
  background-color: #290941;
  border: 1px solid #f2bc59;
  color: #f2bc59;
  border-radius: 50px;
}
.btn-custom-2:hover{
  background-color: #f2bc59;
  color: #290941;
  border: 1px solid #f2bc59;
}
.btnWrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>