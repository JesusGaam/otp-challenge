import { lazy } from "react";

const OtpVerification = lazy(() => import("../components/pages/OtpVerification"));
const Error404 = lazy(() => import("../components/pages/Error404"));

export const pageRouteList = [
  {
    path: '/otp-verification',
    component: OtpVerification
  },
  {
    path: '*',
    component: Error404
  }
]
