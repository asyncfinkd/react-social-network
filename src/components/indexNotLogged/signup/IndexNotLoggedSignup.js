import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";

export default function IndexNotLoggedSignup() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <p>Sign up Component</p>
    </>
  );
}
