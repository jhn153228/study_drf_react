import PostNewForm from "components/PostNewForm";
import React from "react";
import "./PostNew.scss";
import { Card } from "antd";
export default function PostNew() {
  return (
    <div className="PostNew">
      <Card title="새 포스팅 쓰기">
        <PostNewForm />
      </Card>
    </div>
  );
}
