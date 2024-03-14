<script>
import ProjectItem from './ProjectItem.vue';

export default{
    props: {
        classCol: String,
        link: String,
        image: String,
        title: String
    },
    components: {
        ProjectItem
    }
}
</script>
<template>
    <div :class="classCol">
        <ProjectItem 
            :link="link"
            :image="image"
            :title="title"
        />
    </div>
</template>