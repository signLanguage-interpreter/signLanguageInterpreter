import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Login = loadable(() => import("./Components/Login/Login"));
const Join = loadable(() => import("./Components/Join/Join"));
const Register = loadable(() => import("./Components/Register/Register"));

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Router;
