import { createJSONStorage } from 'zustand/middleware';

export const createWebStorage = () => createJSONStorage(() => localStorage);