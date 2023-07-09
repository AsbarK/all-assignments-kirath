import { Routes, BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Landing from "./components/Landing";
import LoginUser from "./components/Login-user";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import PurchasedCourses from "./components/PurchasedCourses";
import SingleCourse from "./components/SingleCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<ShowCourses />} />
          <Route path="/purchasedCourses" element={<PurchasedCourses />} />
          <Route path="/purchasedCourses/:id" element={<SingleCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
