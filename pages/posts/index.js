import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Navigation from "../../components/Navigation";
import PostCard from "../../components/PostCard";

export default function PostsPage({ posts }) {
    return (
        <Navigation className="mt-[8vh]">
            <h1 className="text-5xl text-center">Proyectos </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-8 mt-5 gap-5">
                {posts.map((post) => (
                    <article key={post.filePath} className="w-full h-full">
                        <Link
                            className="hover:no-underline"
                            href={`/posts/[slug]`}
                            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                        >
                            <PostCard post={post} />
                        </Link>
                    </article>
                ))}
            </div>
        </Navigation>
    );
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { posts } };
}
