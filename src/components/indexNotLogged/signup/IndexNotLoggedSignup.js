import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";

export default function IndexNotLoggedSignup() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Styled.GridContainer>
        <Styled.GridContainer__Content>
          <Styled.GridContainer__ContentTitle>
            Sign Up
          </Styled.GridContainer__ContentTitle>
          <Styled.GridContainerBoth__InputsContainer>
            <div style={{ position: "relative" }}>
              <Styled.GridContainerBoth__Input
                type="text"
                placeholder="First name"
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
            <div style={{ position: "relative" }}>
              <Styled.GridContainerBoth__Input
                type="text"
                placeholder="Last name"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
          </Styled.GridContainerBoth__InputsContainer>
          <div style={{ position: "relative" }}>
            <Styled.GridContainerBoth__Input
              style={{ width: "100%" }}
              type="text"
              placeholder="Email address"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
          </div>
          <div style={{ position: "relative" }}>
            <Styled.GridContainerBoth__Input
              style={{ width: "100%" }}
              type="password"
              placeholder="New password"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
          </div>
          <Styled.GridContainer__ContentInputButton>
            Sign Up
          </Styled.GridContainer__ContentInputButton>
        </Styled.GridContainer__Content>
        <IndexNotLoggedFooter />
      </Styled.GridContainer>
    </>
  );
}
