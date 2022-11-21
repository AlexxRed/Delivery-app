const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsLoading = state => state.auth.getIsLoading

const getUserName = state => state.auth.name;
const getUserEmail = state => state.auth.email;
const getUserPhone = state => state.auth.phone;

const authSelectors = {
    getIsLoggedIn,
    getIsLoading,
    getUserName,
    getUserEmail,
    getUserPhone
};
export default authSelectors;
