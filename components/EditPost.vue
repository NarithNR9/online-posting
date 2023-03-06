<template>
  <div
    class="fixed w-full flex py-20 h-screen justify-center inset-0 px-5 bg-gray-900 bg-opacity-50"
  >
    <div class="card w-96 h-80">
      <form @submit.prevent="handleUpdate">
        <div class="text-center font-bold">Edit Post</div>
        <div class="my-6 mx-6">
          <input
            type="text"
            class="ring ring-offset-8 ring-green-300 w-full rounded-sm focus:outline-none focus:ring-green-500"
            placeholder="Title"
            v-model="formData.title"
            required
          />
        </div>

        <div class="my-9 mx-6">
          <textarea
            class="ring ring-offset-8 ring-green-300 w-full rounded-sm focus:outline-none focus:ring-green-500"
            placeholder="Description"
            rows="3"
            v-model="formData.description"
            required
          ></textarea>
        </div>

        <p class="text-red-600 font-thin mt-3 mx-6">{{ error }}</p>

        <div class="flex justify-between ml-4">
          <button
            @click="$emit('close')"
            class="bg-yellow-500 hover:bg-yellow-800 rounded-md text-white w-1/4 mr-6 mt-2"
            type="button"
          >
            Cancel
          </button>
          <button class="btn w-1/4 mr-6 mt-2">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { updatePost } from '~~/composables/useApi'

const { post } = defineProps(['post'])

const formData = ref({
  title: post.title,
  description: post.description,
})

const error = ref('')

const handleUpdate = async () => {

  try {
    updatePost(`/items/posts/${post.id}`, {
      body: {
        title: formData.value.title,
        description: formData.value.description,
      },
      method: 'PATCH',
    })
      .then(async () => await navigateTo('/'))
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped></style>
