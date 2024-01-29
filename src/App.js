import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import UsersLayout from "./components/usersList/usersLayout";
import NotFoundPage from "./components/notFound/notFoundPage";
import GeneralPage from "./components/general/generalPage";
import UserPage from "./components/userPage/userPage";
import LoginPage from "./components/loginPage/loginPage";
import RequireAuth from "./components/hoc/requireAuth";
import CreateUser from "./components/createUser/createUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralPage />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersLayout />} />
          <Route path="users1" element={<Navigate to="/users" replace />} />
          <Route path="users/:userId" element={<UserPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="users/add"
            element={
              <RequireAuth>
                <CreateUser />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
