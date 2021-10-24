import { Redirect } from "react-router-dom";
import User from "./User";

export default function PrivateRoute({ component, requiredRoles }) {
  if (User.current().userId() && User.current().hasRole(requiredRoles)) {
    return component;
  } else {
    return <Redirect to="/login" />;
  }
}
