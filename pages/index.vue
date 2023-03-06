<template>
   <Head>
      <Title>Nuxt | Online Posting</Title>
      <Meta name="description" content="post online with nuxt 3 app"></Meta>
    </Head>
  <NuxtLink to="/post">
    <div
      class="btn w-20 text-center hover:bg-green-800 cursor-pointer shadow-lg mb-3"
    >
      Post
    </div>
  </NuxtLink>
  <div
    class="grid grid-cols-1 w-3/4 sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
  >
    <div v-for="p in posts">
      <PostCard :post="p" />
    </div>
  </div>
</template>

<script setup>
import { getApi } from '~~/composables/useApi';

const { data: posts } = await getApi('/items/posts')

</script>

<style scoped></style>
