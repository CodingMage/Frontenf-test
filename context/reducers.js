export function user(state, action) {
  switch (action.type) {
    case "LOGGED_IN_USER":
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "isLoggedIn",
          JSON.stringify(action.payload.isLoggedIn)
        );
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
      return { ...state, user: action.payload, isLoggedIn: action.payload };
    default:
      return state;
  }
}
