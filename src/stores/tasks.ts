import { ref } from 'vue';
import { defineStore } from 'pinia';

export type Task = {
  id: number;
  userId: number;
  title: string;
};

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([]);

  const addNewTask = (newTask: Task) => {
    tasks.value.push(newTask);
  };

  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  return { tasks, addNewTask, removeTask };
});
