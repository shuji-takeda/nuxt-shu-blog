<template>
    <h1>Blog Page</h1>
    <h1>{{route.params.blogName}}</h1>
</template>
<script setup lang='ts'>
    const route = useRoute()
    console.log(route)
</script>