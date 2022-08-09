import React, { createContext, useState } from "react";
import Content from "./Content";

const ThemeContext = createContext();

console.log(ThemeContext);

//Context
//ComA => ComB => ComC

//1. Create context
//2. Provider
//3. Consumer

const Context = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="container">
      <div className="m-2">
        <button className="btn btn-outline-dark" onClick={toggleTheme}>
          Toggle
        </button>
        <Content theme={theme}></Content>
      </div>
    </div>
  );
};

export default Context;
