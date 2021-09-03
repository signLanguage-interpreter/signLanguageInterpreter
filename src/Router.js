import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Components/Main/Main"));
const Login = loadable(() => import("./Components/Login/Login"));
const Join = loadable(() => import("./Components/Join/Join"));
const Register = loadable(() => import("./Components/Register/Register"));
const Manager = loadable(() => import("./Components/Manager/Manager"));

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/manager" component={Manager} />
    </Switch>
  );
};

export default Router;
