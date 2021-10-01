import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const el = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(el.current, {
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

export default AuthApp;
