export default function PostCard({ post }) {
    const { title, resumen } = post.data;
    return (
        <div className="bg-custom-blue mt-5 p-5 w-full shadow hover:shadow-gray-300">
            <h2 className="text-gray-200 font-bold text-2xl">{title}</h2>
            <p className="mt-3">{resumen}</p>
        </div>
    );
}
