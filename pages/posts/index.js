import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Navigation from "../../components/Navigation";

export default function PostsPage({ posts }) {
    return (
        <Navigation>
            <Layout>
                <h1>Proyectos: </h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.filePath}>
                            <Link
                                href={`/posts/[slug]`}
                                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                            >
                                {post.data.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
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
