import { lazy } from "react";

const OtpVerification = lazy(() => import("../components/pages/OtpVerification"));
const OtpSuccess = lazy(() => import("../components/pages/OtpSuccess"));
const Error404 = lazy(() => import("../components/pages/Error404"));

export const pageRouteList = [
  {
    path: '/',
    component: OtpVerification
  },
  {
    path: '/otp-success',
    component: OtpSuccess
  },
  {
    path: '*',
    component: Error404
  }
]
