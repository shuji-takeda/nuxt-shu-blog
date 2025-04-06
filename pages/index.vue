<template>
  <v-container>
    <v-row v-if="allPosts && allPosts.length > 0">
      <v-col v-for="post in allPosts" :key="post.id" cols="12" sm="6" md="4">
        <NuxtLink :to="`blog${post.path}`">
          <v-card class="rounded-2xl shadow-md" tile>
            <v-card-title class="text-xl font-semibold">{{
              post.seo.title
            }}</v-card-title>
            <v-card-subtitle class="text-sm">{{
              post.meta.date
            }}</v-card-subtitle>
            <v-card-text>{{ post.seo.description }}</v-card-text>
            <v-card-actions>
              <v-btn text :to="`/blog${post.path}`">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <div v-else>
      <p>Loading posts...</p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import { onBeforeMount, ref } from "vue";

const allPosts = ref<ContentCollectionItem[]>([]);

onBeforeMount(async () => {
  const posts = await queryCollection("content").all();
  allPosts.value = posts;
});

// const allPosts = await queryCollection("content").all();
// console.log(allPosts);
</script>
