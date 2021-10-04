import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

const AuthApp = () => {
  const el = useRef();

  useEffect(() => {
    mount(el.current);
  }, []);

  return <div ref={el}></div>;
};

export default AuthApp;
