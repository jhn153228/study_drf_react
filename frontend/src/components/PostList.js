import React, { useState } from "react";
import Post from "./Post";
import { useAppContext } from "store";
import { Alert } from "antd";
import useAxios from "axios-hooks";

function PostList() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const headers = { Authorization: `JWT ${jwtToken}` }; // JWT 인증
  const [{ data: postList, loading, error }, refetch] = useAxios({
    url: "http://localhost:8000/api/posts/",
    headers,
  });

  return (
    <div>
      {postList && postList.length === 0 && (
        <Alert type="warning" message="포스팅이 없습니다." />
      )}
      {postList && postList.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default PostList;
