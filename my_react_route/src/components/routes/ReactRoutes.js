import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../AuthProvider";
import {
  NoMatchPage,
  ProtectedPage,
  SignInPage,
  AuthPage,
  SignUpPage,
  DeviceInfomation,
} from "../../pages";
import { protectedPath, signupPath } from "../../paths";

const ReactRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<SignInPage />} /> */}
      <Route index element={<AuthPage />} />
      <Route path={signupPath} element={<SignUpPage />} />
      <Route
        path={protectedPath}
        element={
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        }
      >
        <Route index element={<DeviceInfomation />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
};

export default ReactRoutes;
