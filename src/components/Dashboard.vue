<template>
  <section class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <header class="bg-white p-4 rounded-lg shadow-lg mb-6 flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">{{ userFullName }}</h1>
          <p class="text-gray-600">{{ user.currentUser?.email }}</p>
        </div>
        <button
          @click="deleteUser(user.currentUser?.id)"
          class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"
        >
          Delete account
        </button>
        <button
          @click="logout"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Logout
        </button>
      </header>
      <h1 class="text-5xl font-bold mb-6 text-center">Welcome {{ userFullName }}</h1>
      <div class="flex flex-wrap -mx-4 justify-center">
        <div class="w-full md:w-2/3 px-4">
          <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 class="text-xl font-semibold mb-2">Your Tasks</h2>
            <div class="mb-4">
              <input
                v-model="queryTask"
                @keyup.enter="addTask"
                type="text"
                placeholder="Add a new task"
                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div v-if="filteredTasks.length">
              <TransitionGroup class="list-disc pl-5" name="list" tag="ul">
                <li
                  v-for="task of filteredTasks"
                  :key="task.id"
                  class="flex justify-between text-gray-700 mb-2"
                >
                  <span>{{ task.title }}</span>
                  <button
                    @click="remove(task.id)"
                    class="ml-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </li>
              </TransitionGroup>
            </div>
            <div v-else>
              <p class="text-gray-500">No tasks available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import { useUserStore } from '@/stores/user';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const user = useUserStore();
const tasks = useTasksStore();
const queryTask = ref('');

const userFullName = computed(() => {
  return user.currentUser ? `${user.currentUser.firstName} ${user.currentUser.lastName}` : '';
});

const filteredTasks = computed(() => {
  return tasks.tasks.filter((task) => task.userId === user.currentUser?.id);
});

const addTask = () => {
  if (user.currentUser?.id) {
    const newTask = {
      title: queryTask.value,
      userId: user.currentUser.id,
      id: Date.now(),
    };

    tasks.addNewTask(newTask);

    queryTask.value = '';
  }
};

const logout = () => {
  if (user.currentUser) {
    user.logOutUser(user.currentUser?.id);

    router.replace('/login');
  }
};

const remove = (id: number) => {
  tasks.removeTask(id);
};

const deleteUser = (id: number | undefined) => {
  if (id !== undefined) {
    user.removeUser(id);

    router.replace('/register');
  }
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  max-height: 60px;
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0px;
  transform: scaleY(0);
}
</style>
