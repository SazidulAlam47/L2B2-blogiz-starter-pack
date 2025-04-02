import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";

type BlogDetailsPageProps = {
    params: Promise<{ id: string }>;
};

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:3004/blogs");
    const blogs = (await res.json()) as TBlog[];
    return blogs.slice(0, 3).map((blog) => ({
        id: blog.id,
    }));
};

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3004/blogs/${id}`, {
        cache: "no-store",
    });
    const blog = await res.json();
    return (
        <div className="py-14">
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;
