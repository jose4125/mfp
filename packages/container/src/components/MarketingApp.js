import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const el = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(el.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={el}></div>;
};

export default MarketingApp;
