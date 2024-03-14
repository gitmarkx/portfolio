<script>
export default{
    props: {
        link: String,
        image: String,
        title: String
    }
}
</script>
<template>
    <div class="project-container">
        <a :href="link" target="_blank">
            <img class="project-image" :src="image" :alt="title">
            <div class="project-title">
                {{ title }}
            </div>
        </a>
    </div>
</template>