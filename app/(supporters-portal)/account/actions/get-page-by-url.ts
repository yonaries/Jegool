"use server";

import axios, { AxiosError } from "axios";

type Page = {
  [key: string]: any;
};

export const getPageData = async (url: string) => {
  console.log("passed down url =>", url);
  try {
    const page = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/page/url/${url}`
    );
    console.log("page by url =>", page.data);
    return page.data.page as Page;
  } catch (error) {
    console.log("error happened at get page by url action");
    if (error instanceof AxiosError) {
      console.log(error.status);
      console.log(error.response);
    } else console.log(error);
  }
};
