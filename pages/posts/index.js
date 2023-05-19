import Link from "next/link";
import Navigation from "../../components/Navigation";
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { UntitledModel } from "../../src/models";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
        async function fetchPosts() {
            const models = await DataStore.query(UntitledModel, Predicates.ALL, {
                sort: (s) => s.updatedAt(SortDirection.DESCENDING),
            });
            setPosts(models);
        }
    }, []);
    return (
        <Navigation className="mt-[8vh]">
            <h1 className="text-5xl text-center">Proyectos </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-8 mt-5 gap-5">
                {posts.map((post) => (
                    <article key={post.id} className="w-full h-full">
                        <Link
                            className="hover:no-underline"
                            href={`/posts/[slug]`}
                            as={`/posts/${post.id}`}
                        >
                            <PostCard post={post} />
                        </Link>
                    </article>
                ))}
            </div>
        </Navigation>
    );
}
