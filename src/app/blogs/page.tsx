// "use client";
import AllBlogs from "@/components/blogs/AllBlogs";
// import { useGetAllBlogsQuery } from "@/redux/api/baseApi";

const Blogs = async () => {
    const res = await fetch("http://localhost:3004/blogs", {
        cache: "no-store",
    });
    const blogs = await res.json();

    // const { data: blogs, isLoading } = useGetAllBlogsQuery(undefined);

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <section className="py-14">
            <h1 className="text-center text-4xl my-5">All Blogs</h1>
            <AllBlogs blogs={blogs} />
        </section>
    );
};

export default Blogs;
