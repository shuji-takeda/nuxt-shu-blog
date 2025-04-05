<template>
  <div>
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>
      <h1>404 NOT FOUND</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { data: post } = useAsyncData(route.path, () => {
  return queryCollection("content")
    .path(`/${route.params.category}/${route.params.blogName}`)
    .first();
});
</script>
