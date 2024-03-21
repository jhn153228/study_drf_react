import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "store";

// 로그인 유무에 따른 리다이렉트 로직
export default function LoginRequiredRouter({
  component: Component,
  ...kwargs
}) {
  const {
    store: { isAuthenticated },
  } = useAppContext();

  if (isAuthenticated) {
  } else {
  }

  return (
    <Route
      {...kwargs}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/accounts/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}
