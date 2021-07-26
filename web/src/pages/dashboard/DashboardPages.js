import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import { Helmet } from "react-helmet";

export default function DashboardPages() {
  return (
    <>
      <Helmet>
        <title>Dashboard | DogeHouse</title>
        <meta name="og:title" content="Dashboard" />
      </Helmet>
      <Dashboard />
    </>
  );
}
