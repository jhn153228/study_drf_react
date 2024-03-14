import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function Routes({ match }) {
  return (
    <>
      <Route exact path={match.url + "/profile"} component={Profile} />
      <Route exact path={match.url + "/login"} component={Login} />
    </>
  );
  /** FIXME:시부레 중첩라우팅 안됨
   * No routes matched location "/accounts/profile,login
   * node 버전 올라가면서 방식이 바뀐거 같음 참고 : <outlet />
   */
}

export default Routes;
