import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";

export default function IndexNotLoggedSignup() {
  const [inputs, setInputs] = useState({
    firstName: "",
    firstNameRef: useRef(),
    lastName: "",
    lastNameRef: useRef(),
    email: "",
    emailRef: useRef(),
    password: "",
    passwordRef: useRef(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
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
                  ref={inputs.firstNameRef}
                  name="firstName"
                  value={inputs.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </div>
              <div style={{ position: "relative" }}>
                <Styled.GridContainerBoth__Input
                  type="text"
                  placeholder="Last name"
                  ref={inputs.lastNameRef}
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleChange}
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
                ref={inputs.emailRef}
                name="email"
                value={inputs.email}
                onChange={handleChange}
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
                ref={inputs.passwordRef}
                name="password"
                value={inputs.password}
                onChange={handleChange}
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
      </form>
    </>
  );
}
