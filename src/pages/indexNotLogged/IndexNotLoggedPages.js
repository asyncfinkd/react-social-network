import React from "react";
import IndexNotLogged from "../../components/indexNotLogged/IndexNotLogged";
import { Helmet } from "react-helmet";

export default function IndexNotLoggedPages() {
    return(
        <>
            <Helmet>
                <title>Login | DogeHouse</title>
                <meta name="og:title" content="Login" />
            </Helmet>
            <IndexNotLogged />
        </>
    )
}