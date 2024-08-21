import { ref } from 'vue';
import { defineStore } from 'pinia';
import { comparePassword, createPasswordHash, createToken } from '@/utils/security';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  token: string;
};

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);
  const currentUser = ref<User | null>(null);

  const registerUser = async (userData: Omit<User, 'id' | 'token'>) => {
    const isUserExist = users.value.find((user) => user.email === userData.email);

    if (isUserExist) {
      return { success: false, error: 'Email is already in use' };
    }

    const securityPassword = await createPasswordHash(userData.password);
    const createUserToken = await createToken(userData.email);

    const newUser: User = {
      ...userData,
      password: securityPassword,
      token: createUserToken,
      id: Date.now(),
    };

    users.value.push(newUser);
    currentUser.value = newUser;

    return { success: true, error: '' };
  };

  const loginUser = async (email: string, password: string) => {
    const registeredUser = users.value.find((user) => user.email === email);

    if (!registeredUser) {
      return { success: false, error: 'Incorrect email' };
    }

    const isValidPassword = await comparePassword(password, registeredUser.password);

    if (!isValidPassword) {
      return { success: false, error: 'Incorrect password' };
    }

    const newToken = createToken(registeredUser.email);

    Object.assign(registeredUser, { token: newToken });

    currentUser.value = registeredUser;

    return { success: true };
  };

  const logOutUser = (id: number) => {
    const userLogOut = users.value.find((user) => user.id === id);
    if (userLogOut) {
      currentUser.value = null;
    }
  };

  const removeUser = (id: number) => {
    logOutUser(id);

    users.value = users.value.filter((user) => user.id !== id);
  };

  return { removeUser, users, logOutUser, currentUser, loginUser, registerUser };
});
