const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.name;
const getUserEmail = state => state.auth.email;
const getUserPhone = state => state.auth.phone;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getUserPhone
};
export default authSelectors;
