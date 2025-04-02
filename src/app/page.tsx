import LatestBlogs from "@/components/blogs/LatestBlogs";

const HomePage = async () => {
    const res = await fetch("http://localhost:3004/blogs", {
        next: {
            revalidate: 30,
        },
    });
    const blogs = await res.json();

    return (
        <section className="py-14">
            <h1 className="text-center text-4xl my-5">Latest Blogs</h1>
            <LatestBlogs blogs={blogs} />
        </section>
    );
};

export default HomePage;
