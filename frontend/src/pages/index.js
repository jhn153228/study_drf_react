import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts";

function Root() {
  return (
    <AppLayout>
      최상위 컴포넌트
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route path="/accounts" Component={AccountsRoutes} />
      </Routes>
    </AppLayout>
  );
}
export default Root;
