export function isLoggedIn() {
    const login = localStorage.getItem('user_logged_in');
    return !!login;
}