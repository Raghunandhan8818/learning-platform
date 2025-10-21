import { createJSONStorage } from 'zustand/middleware';

export const createStorage = () => createJSONStorage(() => localStorage);
