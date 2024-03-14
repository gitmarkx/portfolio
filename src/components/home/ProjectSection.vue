<script setup>
import ProjectContainer from '../ProjectContainer.vue';
import { projectList } from '@/data/projectList';

</script>
<template>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <div class="my-auto">
            <h2 class="mb-5 text-primary">Projects</h2>

            <div class="container-fluid mt-5">
                <div class="row">
                    <ProjectContainer 
                        v-for="(project, index) in projectList"
                        :key="index"
                        :link="project.link"
                        :image="project.image"
                        :title="project.title"
                        classCol="col-md-4 mb-4"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.project-container {
    position: relative;
    overflow: hidden;
    height: 30vh;
}

.project-image {
    width: 100%;
    transition: transform 10s ease;
}

.project-container:hover .project-image {
    transform: translateY(-50%);
}

.project-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    color: white;
}
</style>../icons/ProjectItem.vue../ProjectContainer.vue