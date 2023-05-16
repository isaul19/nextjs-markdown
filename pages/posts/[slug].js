import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default function PostPage({ source, frontMatter }) {
    return (
        <div className="max-w-[80%] lg:max-w-[60%] mx-auto pt-10">
            <header>
                <nav className="text-lg mb-8">
                    <Link href="/posts" legacyBehavior>
                        <a>👈 Regresar</a>
                    </Link>
                </nav>
            </header>
            <div className="post-header my-5">
                <p className="text-4xl text-gray-300 font-bold">{frontMatter.title}</p>
                <p>
                    Creado en:{" "}
                    <span className="text-gray-300 font-bold">{frontMatter.createdAt}</span>
                </p>
                <p>
                    Ultima actualización:{" "}
                    <span className="text-gray-300 font-bold">{frontMatter.updatedAt}</span>
                </p>
            </div>
            <hr />
            <article className="prose max-w-[100ch] internal-prose">
                <MDXRemote {...source} />
            </article>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};
