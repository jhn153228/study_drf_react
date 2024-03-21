import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";
import { useAppContext } from "store";
import { Alert } from "antd";

const apiurl = "http://localhost:8000/api/posts/";

function PostList() {
  const {
    store: { jwtToken },
    dispatch,
  } = useAppContext();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    // Axios : Node.js에서의 API 통신 방법 400대 성공 , 그 외 특이 상태코드 에러 처리
    const headers = { Authorization: `JWT ${jwtToken}` };
    Axios.get(apiurl, {})
      .then((response) => {
        const { data } = response;
        console.log("loaded", response);
        setPostList(data);
      })
      .catch((error) => {
        // error.response();
      });
    console.log("mounted");
  }, []);
  return (
    <div>
      {postList.length === 0 && (
        <Alert type="warning" message="포스팅이 없습니다." />
      )}
      {postList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
