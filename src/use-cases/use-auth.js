
export function useAuth(props) {
    const user = JSON.parse(
        localStorage.getItem('user_data') !== 'undefined'
            ? localStorage.getItem('user_data')
            : '{}',
    );
    if (user) {
        return props.roles.includes(user.roles[0]) || props.minlevel <= user.level;
    } else {
        return false;
    }
}