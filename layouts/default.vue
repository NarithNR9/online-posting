<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Online Posting</NuxtLink>
      <ul class="flex justify-between gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/post">Post</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- output the page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>