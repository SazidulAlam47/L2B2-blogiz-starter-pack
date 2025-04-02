import { TBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = async ({ blogs }: { blogs: TBlog[] }) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-4/5 mx-auto mt-10">
                {blogs.slice(0, 2).map((blog) => (
                    <LatestBlogCard key={blog.id} blog={blog} />
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 mx-auto mt-10">
                {blogs.slice(2, 5).map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    );
};

export default LatestBlogs;
