import React from "react";
import IndexNotLoggedSignup from "../../../components/indexNotLogged/signup/IndexNotLoggedSignup";
import { Helmet } from "react-helmet";

export default function IndexNotLoggedSignupPages() {
  return (
    <>
      <Helmet>
        <title>Sign Up | DogeHouse</title>
        <meta name="og:title" content="Sign Up" />
      </Helmet>
      <IndexNotLoggedSignup />
    </>
  );
}
