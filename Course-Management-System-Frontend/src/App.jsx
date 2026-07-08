import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/layout";
import Courses from "./Pages/Courses";
import Cart from "./Pages/Cart";
import AddCourse from "./Pages/AddCourse";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import Protected from "./routes/Protected";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Protected>
                <Courses />
              </Protected>
            }
          />

          <Route
            path="cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />

          <Route
            path="add-course"
            element={
              <PrivateRoute>
                <AddCourse />
              </PrivateRoute>
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;