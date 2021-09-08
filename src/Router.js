import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Components/Main/Main"));
const Login = loadable(() => import("./Components/Login/Login"));
const Join = loadable(() => import("./Components/Join/Join"));
const Manager = loadable(() => import("./Components/Manager/Manager"));
const Modify = loadable(() => import("./Components/Modify/Modify"));
const RegiBoard = loadable(() => import("./Components/RegiBoard/RegiBoard"));

const Router = () => {
  return (
    <Switch>
      <Route exact path="/user/main" component={Main} />
      <Route exact path="/user/modifyInfo" component={Modify} />
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/manager/main" component={Manager} />
      <Route exact path="/user/regist/:receptionId" component={RegiBoard} />
    </Switch>
  );
};

export default Router;
