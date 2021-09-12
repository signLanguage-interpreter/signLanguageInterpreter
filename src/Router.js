import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Components/Main/Main"));
const Login = loadable(() => import("./Components/Login/Login"));
const Join = loadable(() => import("./Components/Join/Join"));
const Manager = loadable(() => import("./Components/Manager/Manager"));
const Modify = loadable(() => import("./Components/Modify/Modify"));
const RegiBoard = loadable(() => import("./Components/RegiBoard/RegiBoard"));
const AllRegi = loadable(() => import("./Components/All_Regi/AllRegi"));
const Nomatch = loadable(() => import("./Components/Nomatch/Nomatch"));

const Router = () => {
  return (
    <Switch>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/join" component={Join} />
      {/* user */}
      <Route exact path="/user/main" component={Main} />
      <Route exact path="/user/modifyMember/:id" component={Modify} />
      {/* manager */}
      <Route exact path="/manager/main" component={Manager} />
      <Route exact path="/manager/all_register" component={AllRegi} />
      {/* register */}
      <Route exact path="/user/regist/:pk/:receptionId" component={RegiBoard} />
      <Route component={Nomatch} />
    </Switch>
  );
};

export default Router;
