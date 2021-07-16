import React, { useEffect } from "react";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";
import { Link, useLocation } from "react-router-dom";

export default function IndexNotLoggedLogin() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <form>
        <Styled.GridContainer>
          <Styled.GridContainer__Content>
            <Styled.GridContainer__ContentTitle>
              Login
            </Styled.GridContainer__ContentTitle>
            <Styled.GridContainer__ContentInput
              type="text"
              placeholder="Email"
            />
            <Styled.GridContainer__ContentInput
              type="password"
              placeholder="Password"
            />
            <Styled.GridContainer__ContentInputButton>
              Login
            </Styled.GridContainer__ContentInputButton>
            <Link to="/">
              <Styled.GridContainer__ContentTitle active>
                Back Home
              </Styled.GridContainer__ContentTitle>
            </Link>
          </Styled.GridContainer__Content>
          <IndexNotLoggedFooter />
        </Styled.GridContainer>
      </form>
    </>
  );
}
