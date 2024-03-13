<script setup>
import IconGithub from '../icons/IconGithub.vue';
import IconLinkedIn from '../icons/IconLinkedIn.vue';

</script>

<template>
  <section class="resume-section  p-3 p-lg-5 d-flex d-column">
    <div class="my-auto">
      <h1 class="mb-0"> <span class="text-primary">Mark</span>
        Maata
      </h1>
      <div class="subheading mb-5">Cebu City, Philippines ·
        <a href="mailto:name@email.com">markarielmaata@gmail.com</a>
      </div>
      <p class="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.</p>
      <ul class="">
        <li class="">
          <a href="#">
            <IconGithub />
          </a>
        </li>
        <li class="">
          <a href="#">
            <IconLinkedIn />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

ul a{
  display: block;
  padding: .8rem;
  background-color: #495057;
  border-radius: 100px;
  overflow: hidden;
  transition: .3s ease-in-out;
}
ul a:hover{
  background-color: #0d6efd;
}
ul li:not(:last-child){
  margin-right: 10px;
}
a svg{
  width: 1.5rem;
  fill: #fff;
}
</style>