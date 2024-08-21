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
      v-model.trim="dynamicValue"
      @input="updateValue"
      required
    />
    <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  error: String,
  inputClass: String,
});

const emit = defineEmits(['update:modelValue']);

const dynamicValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    dynamicValue.value = newValue;
  }
);

const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement;

  emit('update:modelValue', input.value);
};
</script>
