import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

function AppLayout({ children }) {
  return (
    <div>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}

export default AppLayout;
