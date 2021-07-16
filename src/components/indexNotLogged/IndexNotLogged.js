import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Styled from "../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "./footer/IndexNotLoggedFooter";

export default function IndexNotLogged() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Styled.GridContainer>
        <Styled.GridContainer__Content>
          <Styled.GridContainer__Content__Child>
            <Styled.GridContainer__Content__ChildSpan>
              Welcome
            </Styled.GridContainer__Content__ChildSpan>
            <Styled.GridContainer__Content__Description>
              By logging in you accept our&nbsp;
              <Styled.GridContainer__Content__Description__Linker>
                Privacy Policy
              </Styled.GridContainer__Content__Description__Linker>
              &nbsp;and&nbsp;
              <Styled.GridContainer__Content__Description__Linker>
                Terms of Service
              </Styled.GridContainer__Content__Description__Linker>
              .
            </Styled.GridContainer__Content__Description>
          </Styled.GridContainer__Content__Child>
          <Styled.GridContainer__ContentWith__Buttons>
            <Link to="/login">
              <Styled.GridContainer__Content__Button>
                Login
              </Styled.GridContainer__Content__Button>
            </Link>
            <Styled.GridContainer__Content__Button>
              Create New Account
            </Styled.GridContainer__Content__Button>
          </Styled.GridContainer__ContentWith__Buttons>
          <Styled.GridContainer__ForgotPassword__Container>
            Forgotten password?
          </Styled.GridContainer__ForgotPassword__Container>
        </Styled.GridContainer__Content>
        <IndexNotLoggedFooter />
      </Styled.GridContainer>
    </>
  );
}
