import { Outlet } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { ReactRoutes } from "./components";
import { MyLayout } from "./pages";
function App() {
  return (
    <AuthProvider>
      <MyLayout>
        <Outlet />
        <ReactRoutes />
      </MyLayout>
    </AuthProvider>
  );
}

export default App;
