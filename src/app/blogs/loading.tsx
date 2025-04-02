import LoadingCard from "@/components/ui/LoadingCard";

const BlogLoadingPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 mx-auto mt-10">
            {Array(6)
                .fill(null)
                .map((_, index) => (
                    <LoadingCard key={index} />
                ))}
        </div>
    );
};

export default BlogLoadingPage;
