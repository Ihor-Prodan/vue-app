<template>
  <section class="flex items-center justify-center">
    <div class="w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>
      <form @submit.prevent="login">
        <Input
          label="Email"
          type="email"
          v-model="email"
          :error="showErrors ? emailError || incorectUserData.incorectEmail : ''"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          v-model="password"
          :error="showErrors ? passwordError || incorectUserData.incorectPassword : ''"
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
import { reactive, ref } from 'vue';

const { email, password, emailError, passwordError, validate } = useFormValidation();
const showErrors = ref(false);

const incorectUserData = reactive({
  incorectEmail: '',
  incorectPassword: '',
});

const user = useUserStore();
const router = useRouter();

const login = async () => {
  showErrors.value = true;

  const isFormValid = await validate();

  if (!isFormValid) {
    return;
  }

  incorectUserData.incorectEmail = '';
  incorectUserData.incorectPassword = '';

  const loginSuccessful = await user.loginUser(email.value, password.value);

  if (loginSuccessful.success) {
    incorectUserData.incorectEmail = '';
    incorectUserData.incorectPassword = '';

    router.push('/');
  } else {
    if (loginSuccessful.error?.includes('email')) {
      incorectUserData.incorectEmail = loginSuccessful.error;
    } else if (loginSuccessful.error?.includes('password')) {
      incorectUserData.incorectPassword = loginSuccessful.error;
    }
  }
};
</script>
