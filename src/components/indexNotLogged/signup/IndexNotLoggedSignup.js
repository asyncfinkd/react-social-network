import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";
import axios from "axios";
import env from "../../../constants/Application/env.json";

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
  const [emailValidError, setEmailValidError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [spinner, setSpinner] = useState(false);
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
      setEmailValidError(false);
      inputs.firstNameRef.current.focus();
    } else if (!inputs.lastName) {
      setFirstNameError(false);
      setLastNameError(true);
      setEmailError(false);
      setEmailValidError(false);
      setPasswordError(false);
      inputs.lastNameRef.current.focus();
    } else if (!inputs.email) {
      setFirstNameError(false);
      setLastNameError(false);
      setEmailValidError(false);
      setEmailError(true);
      setPasswordError(false);
      inputs.emailRef.current.focus();
    } else if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(
        inputs.email
      )
    ) {
      setFirstNameError(false);
      setEmailValidError(false);
      setLastNameError(false);
      setEmailError(true);
      setPasswordError(false);
      inputs.emailRef.current.focus();
    } else if (!inputs.password) {
      setFirstNameError(false);
      setEmailValidError(false);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(true);
      inputs.passwordRef.current.focus();
    } else {
      setSpinner(true);
      setFirstNameError(false);
      setEmailValidError(false);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(false);
      const detailInformation = [
        {
          date: [
            {
              day: "",
              month: "",
              year: "",
            },
          ],
          sex: "",
        },
      ];

      axios
        .post(`${env.host}/auth/signup`, {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
          avatar: "",
          detailInformation: detailInformation,
        })
        .then((res) => {
          if (res.data.success == false) {
            setEmailValidError(true);
            inputs.emailRef.current.focus();
          } else {
            setEmailValidError(false);
            localStorage.setItem(
              "access_token",
              JSON.stringify(res.data.access_token)
            );
            localStorage.setItem("logged", true);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            window.location.reload();
          }
          setSpinner(false);
        });
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
          <Styled.GridContainer__Content
            spinner={spinner}
            active
            style={{ position: "relative" }}
          >
            {spinner && (
              <>
                <Styled.GridContainer__SpinnerBlur></Styled.GridContainer__SpinnerBlur>
                <Styled.GridContainer__Spinner>
                  <Styled.GridContaner__SpinnerSpan></Styled.GridContaner__SpinnerSpan>
                </Styled.GridContainer__Spinner>
              </>
            )}
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
              {emailValidError && (
                <Styled.GridContainer__ContentInput__Tooltip>
                  <Styled.GridContainer__ContentInput__Tooltip__Span>
                    Registered
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
            <Styled.GridContainer__ForgotPassword__Container>
              Forgotten password?
            </Styled.GridContainer__ForgotPassword__Container>
          </Styled.GridContainer__Content>
          <IndexNotLoggedFooter />
        </Styled.GridContainer>
      </form>
    </>
  );
}
