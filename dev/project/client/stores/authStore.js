import { create } from 'zustand';

const useAuthStore = create((set) => ({
    token: null,
    setToken: (token) => set({ token }),
    // isLoggedIn: () => !!get().token,
    // isLoggedOut: () => !get().token,
    login: (userData) => set({ token: userData.token }),
    logout: () => set({ token: null })
}))
export default useAuthStore;
