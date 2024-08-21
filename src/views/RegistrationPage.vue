<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100 py-8">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-4 text-center">Welcome to App</h1>
      <Registration />
    </div>
  </section>
</template>

<script setup lang="ts">
import Registration from '../components/Registration.vue';
</script>
