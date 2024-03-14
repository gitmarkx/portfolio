<script>
export default{
    props: {
        icon: String
    }
}
</script>
<template>
    <span data-toggle="tooltip" data-placement="top" title="Tooltip on top">
        <i :class="icon"></i>
    </span>
</template>

<style scoped>
span i {
    font-size: 3rem;
    color: #495057;
}
</style>