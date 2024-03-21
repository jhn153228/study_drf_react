import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import Suggestion from "./Suggestion";
import "./SuggestionList.scss";
import useAxios from "axios-hooks";
import { useAppContext } from "store";

export default function SuggestionList({ style }) {
  const {
    store: { jwtToken },
    dispatch,
  } = useAppContext();
  const headers = { Authorization: `JWT ${jwtToken}` }; // JWT 인증
  const [{ data: userList, loading, error }, refetch] = useAxios({
    url: "http://localhost:8000/accounts/suggestions/",
    headers,
  });

  return (
    <div style={style}>
      {loading && <div> loading </div>}
      {error && <div>로딩중 에러 발생 </div>}
      <Button onClick={() => refetch()}>Reload</Button>
      <Card title="Suggestions for you " size="small">
        {userList && // axios-hooks는 API를 불러올 때 로딩기간에 undefine을 조회하게 되어 오류 발생함 -> userList가 참일 때 순회하게 유도
          userList.map((suggestionUser) => (
            <Suggestion
              suggestionUser={suggestionUser}
              key={suggestionUser.username}
            />
          ))}
      </Card>
    </div>
  );
}
