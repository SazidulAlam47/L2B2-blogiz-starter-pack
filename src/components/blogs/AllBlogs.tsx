import { TBlog } from "@/types";
import BlogCard from "../ui/BlogCard";

const AllBlogs = ({ blogs }: { blogs: TBlog[] }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 mx-auto mt-10">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default AllBlogs;
