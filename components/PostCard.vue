<template>
  <NuxtLink :to="`/post/${post.id}`">
    <div class="card text-center">
      <img
        :src="
          'https://learning.tech-cambodia.com/cms//assets/' + post.thumbnail
        "
        alt="product_image"
        class="thumb"
      />
      <p class="font-bold text-gray-800 m-2 truncate border-t-2">
        {{ post.title }}
      </p>
      <p class="text-start">{{ post.description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style scoped>
.thumb {
  max-height: 170px;
  max-width: 90%;
  margin: 0 auto;
}
</style>
