<template>
  <EditPost v-if="editComponent" @close="editComponent = false" :post="post" />
  <div class="card">
    <div class="flex justify-end space-x-2">
      <button
        @click="handleEditPost"
        class="bg-yellow-500 hover:bg-yellow-800 p-2 rounded-md shadow-md text-white flex"
      >
        <span>Edit Post</span>
      </button>
      <button
        @click="handleDeletePost"
        class="bg-red-600 hover:bg-red-800 p-2 rounded-md shadow-md text-white flex"
      >
        <span>Delete Post</span>
      </button>
    </div>
    <div class="flex flex-col md:flex-row lg:grid md:grid-cols-2 md:gap-10">
      <div class="md:p-7">
        <img
          :src="
            'https://learning.tech-cambodia.com/cms/assets/' + post.thumbnail
          "
          alt="image_tumb"
          class="mx-auto md:my-7"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl md:my-7">{{ post.title }}</h2>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description:</h3>
        <p class="mb-7">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { deletePost } from '~~/composables/useApi'

const { post } = defineProps(['post'])
const editComponent = ref(false)

const handleDeletePost = () => {
  deletePost('/items/posts/' + post.id, { method: 'DELETE' })
    .then(async () => {
      alert('successfully delete post')
      await navigateTo('/')
    })
    .catch((err) => console.log(err))
}

const handleEditPost = () => {
  editComponent.value = true
}
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
