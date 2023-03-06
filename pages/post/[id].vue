<template>
  <div>

    <PostDetails :post="post"/>
  </div>
</template>

<script setup>
  import { getApi } from '~~/composables/useApi';

  const {id} = useRoute().params

  const {data: post} = await getApi('/items/posts/'+id)


</script>

<style scoped>

</style>