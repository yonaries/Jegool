"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types/Post";
import { Heart, PaperclipIcon, Pencil, PlayCircle, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { cva } from "class-variance-authority";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import PostCommentSection from "./post-comment-section";
import { Separator } from "./ui/separator";
import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";
import { EditorContent, useEditor } from "@tiptap/react";
import {
  deletePost,
  fetchPostAttachments,
} from "@/app/creator/post/actions/post";
import useSWR, { mutate } from "swr";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import * as TipTapLink from "@mantine/tiptap";
import { RichTextEditor } from "@mantine/tiptap";
import { Attachement } from "@/types/Attachement";

dayjs.extend(relativeTime);

type Props = {
  post: Post;
  posts: Post[];
  children?: React.ReactNode;
};

const PostCard = ({ post, children, posts }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { currentUserPage, idToken } = useAuth();
  const [isPending, startTransition] = useTransition();

  const { isLoading, data } = useSWR(
    `attachment${post.id}`,
    () => fetchPostAttachments(post.id, idToken!),
    {
      revalidateOnFocus: true,
      keepPreviousData: false,
    }
  );

  useEffect(() => {
    mutate(`attachment${post.id}`, () =>
      fetchPostAttachments(post.id, idToken!)
    );
  }, [post, idToken]);

  const editor = useEditor({
    editable: false,
    content: post.caption ? post.caption : "",
    extensions: [
      StarterKit.configure({
        code: {
          HTMLAttributes: {
            class: "bg-muted",
          },
        },
        heading: {
          levels: [1, 2, 3, 4],
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc",
          },
        },
      }),
      Underline,
      TipTapLink.Link.configure({
        HTMLAttributes: { class: "text-blue-500 underline" },
      }),
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Type Here..." }),
    ],
  });

  const deletePostHandler = () => {
    startTransition(() => deletePost(post.id, idToken!));
    mutate(
      "posts",
      posts.filter((p) => p.id !== post.id),
      false
    );
  };

  const commentsCounterOnClickHandler = () => {
    // TODO: handle comments counter click event
    setShowComments(!showComments);
  };

  const likesCounterOnClickHandler = () => {
    // TODO: handle likes counter click event
    setIsLiked(!isLiked);
  };

  const showMoreHandler = () => {
    setShowMore(!showMore);
  };

  const thumbnailOnClickHandler = (post: Post) => {
    if (post.type.toLowerCase() === "video" && videoRef.current !== null) {
      if (thumbnailRef.current !== null)
        thumbnailRef.current.style.display = "none";
      videoRef.current.play();
    } else if (post.type.toLowerCase() === "image") {
      // window.open(post.thumbnail, "_blank");
    }
  };

  const determineFileType = (file: string, type: string) => {
    switch (type.toLowerCase()) {
      case "image":
        return (
          <Image
            src={file}
            alt={file}
            width={600}
            height={320}
            className="mb-2 h-80 w-full rounded-t-sm object-cover"
            onContextMenu={(e) => e.preventDefault()}
          />
        );
      case "video":
        return (
          <video
            preload="metadata"
            src={file}
            ref={videoRef}
            controls
            loop={false}
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="mb-2 h-80 w-full rounded-t-sm object-cover"
          />
        );
      case "audio":
        return (
          <div onContextMenu={(e) => e.preventDefault()} className="px-5 pt-6">
            <audio
              onContextMenu={(e) => e.preventDefault()}
              src={file}
              controls
              loop={false}
              className="mb-3 w-full"
            />
          </div>
        );
      default:
        break;
    }
  };

  let handlePauseOnOutOfView = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) {
        if (videoRef.current !== null) videoRef?.current.pause();
      }
    });
  };

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };
    let observer = new IntersectionObserver(handlePauseOnOutOfView, options);
    if (videoRef.current !== null) observer.observe(videoRef.current);
  }, []);

  return (
    <Card className="mx-auto my-6 w-11/12 max-w-2xl">
      <CardHeader className="px-0 pt-0">
        {children}
        <div className="relative w-full">
          {post.thumbnail &&
            (post.type.toLowerCase() === "video" ||
              post.type.toLowerCase() === "text") && (
              <div
                className={thumbnailVariants({
                  type: post.type,
                  className: "absolute left-0 top-0 z-10",
                })}
                ref={thumbnailRef}
                onClick={() => thumbnailOnClickHandler(post)}
              >
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={600}
                  height={320}
                  className=" mb-2 h-80 w-full cursor-pointer rounded-t-sm object-cover "
                />
                {post.thumbnail && post.type.toLowerCase() === "video" && (
                  <PlayCircle
                    size={64}
                    className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            )}

          {post.file && determineFileType(post.file, post.type)}
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <CardTitle className="mb-2 text-3xl font-bold capitalize">
            {post.title}
          </CardTitle>
          <CardDescription className=" text-sm font-semibold uppercase">
            {dayjs(post.createdAt).fromNow()}
          </CardDescription>
        </div>
        {post.caption && (
          <>
            <div className="relative">
              {/*showMore ? post.caption : post.caption.slice(0, 400)*/}
              {/*<EditorContent editor={editor} />*/}
              <RichTextEditor editor={editor}>
                <RichTextEditor.Content
                  className="dark:text-white"
                  bg={"transparent"}
                />{" "}
              </RichTextEditor>
              {/*<div className={captionVariants({ showMore })}></div>*/}
            </div>
            {/*<Button
                          variant="link"
                          className=" p-0 font-bold capitalize text-blue-500"
                          onClick={showMoreHandler}
                        >
                          {showMore ? "show less" : "show more"}
                        </Button>*/}
          </>
        )}

        {data && data?.length > 0 && (
          <div className="flex flex-col">
            <p className="font-semibold">Attachments</p>
            <div className="flex">
              {data?.map((attachment: Attachement, index: number) => (
                <a
                  key={attachment.id}
                  href={attachment.url}
                  target="_blank"
                  rel="noreferrer"
                  className="my-1 mr-3 capitalize hover:underline"
                >
                  <PaperclipIcon className="mr-1 inline h-5 w-4" />
                  {`file ${index + 1}`}
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col">
        <div className="flex w-full items-center justify-start">
          {/*
          <Button
            variant="ghost"
            onClick={commentsCounterOnClickHandler}
            className="hover:text-none font-bold text-green-500"
          >
            <span className="mr-1">{451} </span> Comments
          </Button>
          <Button
            variant="ghost"
            onClick={likesCounterOnClickHandler}
            className={likesVariant({ isLiked })}
          >
            <Heart className="mr-1 h-5 w-4 fill-inherit" />
            {451} Likes
          </Button>
          */}
          {currentUserPage &&
            post.pageId &&
            currentUserPage.id === post.pageId && (
              <div className="flex flex-1 items-center justify-end">
                <Link href={`/creator/post/edit/${post.id}`}>
                  <Pencil className="my-2 mr-4 h-5 w-4 cursor-pointer text-blue-500 hover:fill-blue-500" />
                </Link>
                <Trash
                  className="my-2 mr-4 h-5 w-4 cursor-pointer text-red-500 hover:fill-red-500"
                  onClick={deletePostHandler}
                />
              </div>
            )}
        </div>
        {/*
        <Separator />
        <PostCommentSection
          comments={[
            {
              id: "1",
              avatar: "https://github.com/shadcn.png",
              name: "Shad Mirza",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            },
            {
              id: "2",
              avatar: "https://github.com/shadcn.png",
              name: "Shad Mirza",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            },
          ]}
          showComments={showComments}
        />
        */}
      </CardFooter>
    </Card>
  );
};

const captionVariants = cva("absolute top-0 w-full h-full rounded-md", {
  variants: {
    showMore: {
      true: "hidden",
      false:
        "bg-gradient-to-b from-transparent to-gray-50 opacity-90 dark:to-gray-950",
    },
  },
});

const thumbnailVariants = cva("w-full h-80", {
  variants: {
    type: {
      video: "absolute top-0",
      text: "relative mb-2",
      image: "relative",
      audio: "relative",
      file: "relative",
    },
  },
});

const likesVariant = cva("font-bold hover:text-none", {
  variants: {
    isLiked: {
      true: "text-red-500 fill-red-500",
      false: "text-gray-500 fill-gray-500",
    },
  },
});

export default PostCard;
function fetchAttachment(id: string, arg1: string) {
  throw new Error("Function not implemented.");
}
