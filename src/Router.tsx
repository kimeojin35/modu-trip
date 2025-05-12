import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import NotFound from "./pages/NotFound";
import My from "./pages/My";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Schedule from "./pages/Schedule";
import Group from "./pages/Group";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Test from "./pages/Test";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/my" element={<My />} />
        <Route path="/group" element={<Group />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
