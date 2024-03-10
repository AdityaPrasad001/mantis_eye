import Login from "./Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <h1 className="logo">Mantis Eye</h1>
      <Login />
    </AuthProvider>
  );
}

export default App;
