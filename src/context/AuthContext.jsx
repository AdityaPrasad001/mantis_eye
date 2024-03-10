import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const inititalState = {
  user: null,
  isAuthenticated: false,
  isError: null,
};

const USER = {
  name: "Mantis Eye",
  username: "mantiseye",
  password: "mantiseye2024",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, error: true };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isError }, disptach] = useReducer(
    reducer,
    inititalState
  );

  function login(username, password) {
    if (username === USER.username && password === USER.password)
      disptach({ type: "login", payload: USER });
  }

  function logout() {
    disptach({ type: "logout" });
  }

  function error() {
    if (username !== USER.username && password !== USER.password)
      disptach({ type: "error", payload: USER });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
