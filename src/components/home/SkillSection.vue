<script setup>
import IconDisplay from '../icons/IconDisplay.vue';
</script>
<template>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
            <h2 class="mb-5 text-primary">Skills</h2>
            
            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="techList mb-4">
                <li class="">
                    <IconDisplay icon="devicon-php-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-laravel-original" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-javascript-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-vuejs-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-jquery-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-nextjs-original-wordmark" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-html5-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-css3-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-sass-original" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-mysql-original" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-wordpress-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-csharp-plain" />
                </li>
                <li class="">
                    <IconDisplay icon="devicon-git-plain" />
                </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Mobile-First, Responsive Design
                </li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Cross Browser Testing &amp; Debugging
                </li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Cross Functional Teams
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.techList {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}

.techList li:not(:last-child) {
    margin-right: 25px;
    margin-bottom: 15px;
}

</style>