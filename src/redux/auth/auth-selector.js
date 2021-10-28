const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const isUserLoading = (state) => state.auth.isLoading;
const getAuthError = (state) => state.auth.error;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    isUserLoading,
    getAuthError,
};

export default authSelectors;