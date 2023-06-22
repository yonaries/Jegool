"use client";
import PostCard from "@/components/post-card";
import TabBar from "@/components/tabbar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/Post";
import { Card } from "@tremor/react";
import useSWR from "swr";
import { fetchPagePosts } from "../actions/get-page-posts";

type Props = {
  pageId: string;
  about: string;
};

const tabBarItems = (posts: Post[], about: string, projects: any) => ({
  triggers: ["Posts", "About", "Projects"],
  contents: [
    <div key={1}>
      {posts && posts.length > 0 ? (
        posts.map((item) => <PostCard key={item.id} post={item} />)
      ) : (
        <div className="flex w-full justify-center py-2 text-lg font-bold">
          No posts
        </div>
      )}
    </div>,
    <div key={2} className="my-6 flex justify-center">
      <Card className="w-11/12 max-w-2xl">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            {about ? about : "No description provided"}
          </p>
        </CardContent>
      </Card>
    </div>,
    <div key={3}>
      {projects && projects.length > 0 ? (
        projects.map((item: any) => <PostCard key={item.id} post={item} />)
      ) : (
        <div className="flex w-full justify-center py-2 text-lg font-bold">
          No projects
        </div>
      )}
    </div>,
  ],
});

const PageContents = ({ pageId, about }: Props) => {
  const { data, error, isLoading } = useSWR(pageId, fetchPagePosts);

  if (error) {
    return <div>show membership cards here</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <TabBar justify="center" items={tabBarItems(data!, about, data)} />;
};

export default PageContents;