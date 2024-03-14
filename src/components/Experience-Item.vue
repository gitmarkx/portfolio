
<script>
export default {
  props: {
    item: Object
  }
};
</script>

<template>
    <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
            <h3 class="mb-0">{{ item.title }}</h3>
            <div class="subheading mb-3">{{ item.company }}</div>
            <ul v-for="(role, index) in item.role" :key="index">
                <li>{{ role }}</li>
            </ul>
        </div>
        <div class="resume-date text-md-right">
            <span class="text-primary">{{ item.duration }}</span>
        </div>
    </div>
</template>
