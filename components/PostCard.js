export default function PostCard({ post }) {
    const { title, resumen, updatedAt } = post.data;
    return (
        <div className="bg-custom-blue mt-5 p-5 w-full shadow hover:shadow-gray-300">
            <h2 className="text-gray-100 font-bold text-2xl">{title}</h2>
            <small className="text-gray-300 text-lg">Ultima actualización: {updatedAt}</small>
            <p className="mt-3">{resumen}</p>
        </div>
    );
}
