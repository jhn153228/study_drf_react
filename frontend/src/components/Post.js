import React from "react";
import { Card } from "antd";
import { HeartFilled, HeartOutlined, UserOutlined } from "@ant-design/icons";
function Post({ post }) {
  const { caption, location, photo } = post;
  return (
    <div>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartFilled />]}
      >
        <Card.Meta
          avatar={<UserOutlined />}
          title={location}
          description={caption}
        />
      </Card>
    </div>
  );
}

export default Post;
