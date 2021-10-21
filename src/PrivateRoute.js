import { Redirect } from "react-router-dom";
import { STOREUID, STOREUROLES } from "./Constants";

export default function PrivateRoute({ component, requiredRoles }) {
  let userRoles = sessionStorage.getItem(STOREUROLES);
  let userId = sessionStorage.getItem(STOREUROLES);

  if (userId && requiredRoles.indexOf(userRoles) >= 0) {
    return component;
  } else {
    return <Redirect to="/login" />;
  }
}
