import { useUserStore } from "~/store/user";

// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUserStore(); // Assuming you're using Pinia or another store
    const isAuthenticated = user.isLoggedIn; // Check if the user is authenticated
    console.log(to);
    if (!isAuthenticated) {
        // If the user is not authenticated, redirect to the login page
        return navigateTo('/login');
    }
    else if (isAuthenticated && to.name == 'login') {
        return navigateTo('/');
    }
});
