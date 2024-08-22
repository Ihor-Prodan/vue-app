<template>
  <section class="flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-semibold mb-6 text-center">Register</h1>
      <form @submit.prevent="register">
        <Input
          label="First Name"
          type="text"
          v-model.trim="firstName"
          :error="showError ? firstNameError : ''"
          placeholder="Enter your first name"
        />
        <Input
          label="Last Name"
          type="text"
          v-model.trim="lastName"
          :error="showError ? lastNameError : ''"
          placeholder="Enter your last name"
        />
        <Input
          label="Email"
          type="email"
          v-model.trim="email"
          :error="showError ? emailError || userExisted : ''"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          v-model.trim="password"
          :error="showError ? passwordError : ''"
          placeholder="Enter your password"
        />
        <div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Register
          </button>
        </div>
        <div class="text-center mt-4">
          <p class="text-gray-600">Already have an account?</p>
          <router-link to="/" class="text-blue-500 hover:underline"> Log in here </router-link>
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

const userExisted = ref('');
const showError = ref(false);
const router = useRouter();
const user = useUserStore();

const {
  firstName,
  lastName,
  email,
  password,
  firstNameError,
  lastNameError,
  emailError,
  passwordError,
  validate,
} = useFormValidation();

const register = async () => {
  showError.value = true;

  const isFormValid = await validate();

  if (!isFormValid) {
    return;
  }

  userExisted.value = '';

  const isNewUser = await user.registerUser({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  });

  if (isNewUser.success) {
    router.push('/');

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';

    userExisted.value = '';
  } else {
    userExisted.value = isNewUser.error;

    setTimeout(() => {
      userExisted.value = '';
    }, 5000);
  }
};
</script>
