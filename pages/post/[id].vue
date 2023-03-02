<template>
  <div>

    <Head>
      <Title>Nuxt | {{ post.data.title }}</Title>
      <Meta name="description" :content="post.data.description"></Meta>
    </Head>

    <PostDetails :post="post.data"/>
  </div>
</template>

<script setup>

  const {id} = useRoute().params

  const {data: post} = await useFetch('https://learning.tech-cambodia.com/cms/items/posts/'+id)

  // if (!product.value) { 
  //   throw createError({statusCode: 404, statusMessage: 'Product not found!'})
  // }

</script>

<style scoped>

</style>