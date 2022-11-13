import * as React from "react";
import { PostLayout } from "../../layouts/post-layout";
import Seo from "../../components/seo";

const BlogPost = () => {
  return <PostLayout title="Super Cool Blog Posts" body="Body!!"></PostLayout>;
};

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
