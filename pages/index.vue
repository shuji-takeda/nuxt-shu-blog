<template>
  <h1>this is index</h1>
  <div v-for="post in allPosts" :key="post.id">
    <NuxtLink :to="`blog${post.path}`">
      <article
        class="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105"
      >
        <h2 class="text-xl font-semibold truncate">{{ post.seo.title }}</h2>
        <p class="text-gray-500 text-sm">{{ post.meta.date }}</p>
        <p class="text-gray-700 mt-2 line-clamp-3">
          {{ post.seo.description }}
        </p>
      </article>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const allPosts = await queryCollection("content").all();
console.log(allPosts);
</script>
