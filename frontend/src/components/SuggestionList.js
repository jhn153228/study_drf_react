import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import { Button, Card } from "antd";
import Suggestion from "./Suggestion";
import "./SuggestionList.scss";
import useAxios from "axios-hooks";
import { useAppContext } from "store";

export default function SuggestionList({ style }) {
  const [userList, setUserList] = useState([]);

  const {
    store: { jwtToken },
  } = useAppContext();
  const headers = { Authorization: `JWT ${jwtToken}` }; // JWT 인증
  const [{ data: originUserList, loading, error }, refetch] = useAxios({
    url: "http://localhost:8000/accounts/suggestions/",
    headers,
  });
  useEffect(() => {
    if (!originUserList) setUserList([]);
    else
      setUserList(
        originUserList.map((user) => ({ ...user, is_follow: false }))
      );
  }, [originUserList]);

  const onFollowUser = (username) => {
    // useAxios는 GET 방식에서 쓰는게 유용하다고 함... 다른 메서드에서 사용할 땐 메뉴얼화 할 때 복잡해진다고 함
    const data = { username };
    const config = { headers };
    Axios.post("http://localhost:8000/accounts/follow/", data, config)
      .then((response) => {
        setUserList((prevUserList) => {
          return prevUserList.map((user) => {
            if (user.username === username) {
              return { ...user, is_follow: true };
            } else {
              return user;
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={style}>
      {loading && <div> loading </div>}
      {error && <div>로딩중 에러 발생 </div>}
      <Button onClick={() => refetch()}>Reload</Button>
      <Card title="Suggestions for you " size="small">
        {
          // userList && // axios-hooks는 API를 불러올 때 로딩기간에 undefine을 조회하게 되어 오류 발생함 -> userList가 참일 때 순회하게 유도
          userList.map((suggestionUser) => (
            <Suggestion
              suggestionUser={suggestionUser}
              key={suggestionUser.username}
              onFollowUser={onFollowUser}
            />
          ))
        }
      </Card>
    </div>
  );
}
