"use server";
import { TBlog } from "@/types";

export const createBlog = async (data: TBlog) => {
    const res = await fetch("http://localhost:3004/blogs", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    });

    const blogInfo = await res.json();
    return blogInfo;
};
