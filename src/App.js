import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import AdminPortal from "./page/adminpage/admin";
import PrivateRouter from "./component/private-route/PrivateRouter";
import Option1 from "./pages/Option1";
import Option2 from "./pages/Option2";
import Option3 from "./pages/Option3";
import Option4 from "./pages/Option4";
import Option5 from "./pages/Option5";
import TeacherPortal from "./pages/teacherportal";
import Signin1 from "./components/signin/signin-hien";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/admin-portal"
          element={
            <PrivateRouter>
              <AdminPortal />
            </PrivateRouter>
          }
        />
        <Route
          path="/teacher-portal"
          element={
            <PrivateRouter>
              <TeacherPortal />
            </PrivateRouter>
          }
        >
          <Route path="/teacher-portal/option1" element={<Option1 />} />
          <Route path="/teacher-portal/option2" element={<Option2 />} />
          <Route path="/teacher-portal/option3" element={<Option3 />} />
          <Route path="/teacher-portal/option4" element={<Option4 />} />
          <Route path="/teacher-portal/option5/:id" element={<Option5 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
