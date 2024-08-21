<template>
  <section class="flex items-center justify-center">
    <div class="w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>
      <form @submit.prevent="login">
        <Input
          label="Email"
          type="email"
          v-model="email"
          :error="emailError || incorectUserData.incorectEmail"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          v-model="password"
          :error="passwordError || incorectUserData.incorectPassword"
          placeholder="Enter your password"
        />

        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Login
          </button>
        </div>

        <div class="text-center mt-4">
          <p class="text-gray-600">Don't have an account?</p>
          <router-link to="/register" class="text-blue-500 hover:underline">
            Register here
          </router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { useFormValidation } from '@/utils/validation';
import Input from './Input.vue';
import { ref } from 'vue';
const { email, password, emailError, passwordError } = useFormValidation();
const showErrors = ref(false);
const incorectUserData = ref({
  incorectEmail: '',
  incorectPassword: '',
});

const user = useUserStore();
const router = useRouter();

const login = async () => {
  showErrors.value = true;

  incorectUserData.value.incorectEmail = '';
  incorectUserData.value.incorectPassword = '';

  const loginSuccessful = await user.loginUser(email.value, password.value);

  if (loginSuccessful.success) {
    incorectUserData.value.incorectEmail = '';
    incorectUserData.value.incorectPassword = '';

    router.push('/dashboard');
  } else {
    if (loginSuccessful.error?.includes('email')) {
      incorectUserData.value.incorectEmail = loginSuccessful.error;
    } else if (loginSuccessful.error?.includes('password')) {
      incorectUserData.value.incorectPassword = loginSuccessful.error;
    }

    setTimeout(() => {
      incorectUserData.value.incorectEmail = '';
      incorectUserData.value.incorectPassword = '';
    }, 5000);
  }
};
</script>
