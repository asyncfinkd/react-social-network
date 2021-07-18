import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailInformationAlert from "./alerts/DetailInformation/DetailInformationAlert";

export default function Dashboard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [DashboardAlert, setDashboardAlert] = useState(false);
  useEffect(() => {
    if (
      user.detailInformation[0].sex === "" ||
      user.detailInformation[0].date[0].month === "" ||
      user.detailInformation[0].date[0].day === "" ||
      user.detailInformation[0].date[0].year === ""
    ) {
      setDashboardAlert(true);
    } else {
      setDashboardAlert(false);
    }
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {DashboardAlert && (
        <>
          <DetailInformationAlert />
        </>
      )}
    </>
  );
}
