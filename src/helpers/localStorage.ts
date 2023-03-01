const USER_ACCESS_TOKEN = "token";

const LocalStorageHelpers = {
  getAccessToken: () => {
    return localStorage.getItem(USER_ACCESS_TOKEN);
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

export { LocalStorageHelpers };
