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
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submit = () => {
    if (!inputs.firstName) {
      setFirstNameError(true);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(false);
    } else if (!inputs.lastName) {
      setFirstNameError(false);
      setLastNameError(true);
      setEmailError(false);
      setPasswordError(false);
    } else if (!inputs.email) {
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(true);
      setPasswordError(false);
    } else if (!inputs.password) {
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(true);
    } else {
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(false);
    }
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
                {firstNameError && (
                  <Styled.GridContainer__ContentInput__Tooltip>
                    <Styled.GridContainer__ContentInput__Tooltip__Span>
                      Required
                    </Styled.GridContainer__ContentInput__Tooltip__Span>
                  </Styled.GridContainer__ContentInput__Tooltip>
                )}
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
                {lastNameError && (
                  <Styled.GridContainer__ContentInput__Tooltip>
                    <Styled.GridContainer__ContentInput__Tooltip__Span>
                      Required
                    </Styled.GridContainer__ContentInput__Tooltip__Span>
                  </Styled.GridContainer__ContentInput__Tooltip>
                )}
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
              {emailError && (
                <Styled.GridContainer__ContentInput__Tooltip>
                  <Styled.GridContainer__ContentInput__Tooltip__Span>
                    Required
                  </Styled.GridContainer__ContentInput__Tooltip__Span>
                </Styled.GridContainer__ContentInput__Tooltip>
              )}
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
              {passwordError && (
                <Styled.GridContainer__ContentInput__Tooltip>
                  <Styled.GridContainer__ContentInput__Tooltip__Span>
                    Required
                  </Styled.GridContainer__ContentInput__Tooltip__Span>
                </Styled.GridContainer__ContentInput__Tooltip>
              )}
            </div>
            <Styled.GridContainer__ContentInputButton onClick={() => submit()}>
              Sign Up
            </Styled.GridContainer__ContentInputButton>
          </Styled.GridContainer__Content>
          <IndexNotLoggedFooter />
        </Styled.GridContainer>
      </form>
    </>
  );
}
