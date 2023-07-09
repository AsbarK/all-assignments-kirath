import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAdmin from "./components/Login-admin";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
