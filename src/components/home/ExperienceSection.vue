<script setup>
import ExperienceItem from '../Experience-Item.vue';
import { experienceList } from '@/data/experienceList';
</script>

<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5 text-primary">Experience</h2>
      <ExperienceItem
        v-for="(item, index) in experienceList"
        :item="item"
        :key="index"
      />
    </div>
  </section>
</template>
../Experience-Item.vue