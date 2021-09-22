import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

const MarketingApp = () => {
  const el = useRef();

  useEffect(() => {
    mount(el.current);
  }, []);
  return <div ref={el}></div>;
};

export default MarketingApp;
