import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import SuggestionList from "./SuggestionList";
import StoryList from "./StoryList";
import LogoImage from "assets/logo.png";

function AppLayout({ children, sidebar }) {
  const menuItems = [
    {
      key: "menu1",
      label: "메뉴1",
    },
    {
      key: "menu2",
      label: "메뉴2",
    },
    {
      key: "menu3",
      label: "메뉴3",
    },
  ];
  return (
    <div className="app">
      <div className="header">
        <h1 className="page-title">
          <img src={LogoImage} alt="logo" />
        </h1>
        <div className="seach">
          <Input.Search />
        </div>
        <div className="topnav">
          <Menu mode="horizontal" items={menuItems} />
        </div>
      </div>

      <div className="contents">{children}</div>
      <div className="sidebar">{sidebar}</div>
      <div className="footer">&copy 2024 SKY_153228</div>
    </div>
  );
}

export default AppLayout;
