import React, { useState, useEffect } from "react";
import * as Styled from "../../styles/indexNotLogged/IndexNotLoggedStyles";
import IndexNotLoggedFooter from "../footer/IndexNotLoggedFooter";
import { Link, useLocation } from "react-router-dom";

export default function IndexNotLoggedLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
    } else if (!inputs.password) {
      setEmailError(false);
      setPasswordError(true);
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
      <form>
        <Styled.GridContainer>
          <Styled.GridContainer__Content>
            <Styled.GridContainer__ContentTitle>
              Login
            </Styled.GridContainer__ContentTitle>
            <div style={{ position: "relative" }}>
              <Styled.GridContainer__ContentInput
                type="text"
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
                name="email"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
            <div style={{ position: "relative" }}>
              <Styled.GridContainer__ContentInput
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleChange}
                name="password"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
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
