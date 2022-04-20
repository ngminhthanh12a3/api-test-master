import { Outlet } from "react-router-dom";
import { AuthProvider, AuthStatus } from "./AuthProvider";
import { ReactRoutes } from "./components";
import { MyLayout } from "./pages";
function App() {
  return (
    <AuthProvider>
      <MyLayout>
        {/* <h1>Welcome to VNPT React Router </h1>  */}
        <AuthStatus />
        <ReactRoutes />

        <Outlet />
      </MyLayout>
    </AuthProvider>
  );
}

export default App;
