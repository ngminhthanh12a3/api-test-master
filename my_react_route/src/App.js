import { Routes, Route, Outlet } from "react-router-dom";
import { SignInPage, SignUpPage, NoMatchPage, ProtectedPage } from "./pages";
import { AuthProvider, RequireAuth, AuthStatus } from "./AuthProvider";
import { signupPath, protectedPath } from "./paths";
function App() {
  return (
    <AuthProvider>
      <h1>Welcome to VNPT React Router </h1>
      <AuthStatus />

      <Routes>
        <Route index element={<SignInPage />} />
        <Route path={signupPath} element={<SignUpPage />} />
        <Route
          path={protectedPath}
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>

      <Outlet />
    </AuthProvider>
  );
}

export default App;
