import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import UsersLayout from "./components/usersList/usersLayout";
import NotFoundPage from "./components/notFound/notFoundPage";
import GeneralPage from "./components/general/generalPage";
import UserPage from "./components/userPage/userPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralPage />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersLayout />} />
          <Route path="users/:userId" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
