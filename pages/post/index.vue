<template>
  <Head>
    <Title>Nuxt | Posting</Title>
  </Head>
  <div class="md:flex md:justify-center">
    <div class="card md:w-2/3 lg:w-1/2 xl:1/3">
      <form @submit.prevent="handlePost" action="">
        <div class="text-center font-bold">POST</div>
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

        <div class="mt-9 mx-6">
          <input
            @change="handleFile"
            type="file"
            class="ring ring-offset-8 ring-green-300 w-full rounded-sm focus:outline-none focus:ring-green-500"
            placeholder="Title"
          />
        </div>
        <p class="text-red-600 font-thin mt-3 mx-6">{{ error }}</p>

        <div class="flex justify-end">
          <button class="btn w-1/4 mr-6 mt-2">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { postImg, postApi } from '~~/composables/useApi'

const formData = ref({
  title: '',
  description: '',
  file: null
})

const error = ref('')

const handlePost = async () => {

  if (formData.value.file) {
    // file upload
    try {
      const res = await postImg('/files', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          thumbnail: formData.value.file,
        },
      })

      if (res) {
        postApi('/items/posts', {
          body: {
            title: formData.value.title,
            description: formData.value.description,
            thumbnail: res.data.id,
          },
          method: 'POST',
        })
          .then(async () => await navigateTo('/'))
          .catch((err) => console.log(err))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const handleFile = (e) => {
  const seleted = e.target.files[0]
  const limitedSize = 1024 * 1024

  const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg']

  if (seleted.size > limitedSize) {
    error.value = 'Size of the image must be equal or less tha 1MB '
    formData.value.file = null
  } else {
    if (seleted && types.includes(seleted.type)) {
      formData.value.file = seleted
      error.value = null
    } else {
      error.value = 'Only images file will be accepted.'
    }
  }
}
</script>

<style lang="scss" scoped></style>
