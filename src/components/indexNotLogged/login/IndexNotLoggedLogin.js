import React, { useState, useEffect, useRef } from "react";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";
import { Link, useLocation } from "react-router-dom";

export default function IndexNotLoggedLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    emailRef: useRef(),
    password: "",
    passwordRef: useRef(),
  });
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
    if (!inputs.email) {
      setEmailError(true);
      setPasswordError(false);
      inputs.emailRef.current.focus();
    } else if (!inputs.password) {
      setEmailError(false);
      setPasswordError(true);
      inputs.passwordRef.current.focus();
    } else {
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
              Login
            </Styled.GridContainer__ContentTitle>
            <div style={{ position: "relative" }}>
              <Styled.GridContainer__ContentInput
                type="text"
                placeholder="Email"
                ref={inputs.emailRef}
                value={inputs.email}
                onChange={handleChange}
                autoFocus
                name="email"
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
              <Styled.GridContainer__ContentInput
                type="password"
                placeholder="Password"
                ref={inputs.passwordRef}
                value={inputs.password}
                onChange={handleChange}
                name="password"
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
              Login
            </Styled.GridContainer__ContentInputButton>
            <Link to="/">
              <Styled.GridContainer__ForgotPassword__Container>
                Forgotten password?
              </Styled.GridContainer__ForgotPassword__Container>
            </Link>
          </Styled.GridContainer__Content>
          <IndexNotLoggedFooter />
        </Styled.GridContainer>
      </form>
    </>
  );
}
