<script setup>
import {ref} from 'vue';
import ProjectContainer from '../icons/ProjectContainer.vue';

const projectList = ref([
    {
        link: 'https://www.hatanaka.jp/',
        image: 'src/assets/image/projects/hatanaka.png',
        title: 'Hatanaka'
    }, 
    {
        link: 'https://www.tsuboi.biz/',
        image: 'src/assets/image/projects/tsuboi.jpg',
        title: 'Tsuboi Industry'
    }, 
    {
        link: 'https://www.esc-espo.jp/espokids/',
        image: 'src/assets/image/projects/espokids.png',
        title: 'Espo Kids'
    }, 
    {
        link: 'https://www.lattorti.com/',
        image: 'src/assets/image/projects/lattorti.png',
        title: 'Lattorti'
    }, 
    {
        link: 'https://www.seitou-shizuoka.co.jp/',
        image: 'src/assets/image/projects/seitou-shizuoka.png',
        title: 'Seitou Shizouka'
    }, 
    {
        link: 'https://www.hello-pharmacy.com/',
        image: 'src/assets/image/projects/hello-pharmacy.png',
        title: 'Hello Pharmacy'
    }, 
    {
        link: 'https://avancesys.co.jp/',
        image: 'src/assets/image/projects/avancesys.png',
        title: 'Avance System'
    }, 
    {
        link: 'https://shinei-jyuutaku.jp/',
        image: 'src/assets/image/projects/shinei.png',
        title: 'Shinei'
    }, 
    {
        link: 'https://ifprint.jp/',
        image: 'src/assets/image/projects/ifprint.png',
        title: 'Ifprint'
    },  
    {
        link: 'https://www.shojudo.com/',
        image: 'src/assets/image/projects/shojudo.png',
        title: 'Shojudo'
    }, 
    {
        link: 'https://rakue-reform.com/rakueplus/',
        image: 'src/assets/image/projects/rakueplus.jpeg',
        title: 'Rakueplus'
    }, 
    {
        link: 'http://cafe-suchard.com/',
        image: 'src/assets/image/projects/suchard.jpeg',
        title: 'Suchard'
    }, 
    {
        link: 'https://artsora.net/',
        image: 'src/assets/image/projects/artsora.jpeg',
        title: 'Artsora'
    }, 
    {
        link: 'https://mizu-shinkyu.com/',
        image: 'src/assets/image/projects/mizu-shinkyu.png',
        title: 'Mizu-Shinkyu'
    },
])
</script>
<template>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
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
    transition: transform 3s ease;
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
</style>../icons/ProjectItem.vue