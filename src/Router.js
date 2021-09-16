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

const ManagerSignUp = loadable(() =>
  import("./Components/ManagerSignUp/ManagerSignUp")
);
const AllList = loadable(() => import("./Components/Manager/AllList/AllList"));
const MyList = loadable(() => import("./Components/Manager/MyList/MyList"));
const CompleteList = loadable(() =>
  import("./Components/Manager/CompleteList/CompleteList")
);

const Router = () => {
  return (
    <Switch>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/join" component={Join} />
      {/* user */}
      <Route exact path="/user/main" component={Main} />
      <Route exact path="/user/modifyMember/:id" component={Modify} />
      <Route exact path="/manager/managerInfo" component={ManagerSignUp} />
      {/* manager */}
      <Route exact path="/manager/main" component={Manager} />
      <Route exact path="/manager/all_register" component={AllRegi} />
      {/* 모든 신청 리스트 */}
      <Route exact path="/manager/all_list" component={AllList} />
      {/* 자신에게 온 신청 리스트 */}
      <Route exact path="/manager/my_list" component={MyList} />
      {/* 완료된 신청 리스트 */}
      <Route exact path="/manager/complete_list" component={CompleteList} />
      {/* register */}
      <Route exact path="/user/regist/:pk/:receptionId" component={RegiBoard} />
      <Route component={Nomatch} />
    </Switch>
  );
};

export default Router;
