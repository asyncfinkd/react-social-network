import React from "react";
import { Helmet } from "react-helmet";
import IndexNotLoggedLogin from "../../../components/indexNotLogged/login/IndexNotLoggedLogin";

export default function IndexNotLoggedLoginPages() {
  return (
    <>
      <Helmet>
        <title>Login | DogeHouse</title>
        <meta name="og:title" content="Login" />
      </Helmet>
      <IndexNotLoggedLogin />
    </>
  );
}
