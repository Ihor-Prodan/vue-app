<template>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2">{{ label }}</label>
    <input
      :type="type"
      :class="[
        'w-full px-3 py-2 border rounded focus:outline-none focus:ring-2',
        inputClass,
        { 'border-red-500': error },
      ]"
      :placeholder="placeholder"
      v-model.trim="model"
    />
    <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  label: string;
  type: string;
  placeholder: string;
  error: string | undefined;
  inputClass?: string;
}

defineProps<Props>();
const model = defineModel<string>('modelValue');
</script>
