import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { UntitledModel } from "../../src/models";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

export default function PostPage({ source, data }) {
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
                <p className="text-4xl text-gray-300 font-bold">{data.title}</p>
                <p>
                    Creado en: <span className="text-gray-300 font-bold">{data.createdAt}</span>
                </p>
                <p>
                    Ultima actualización:{" "}
                    <span className="text-gray-300 font-bold">{data.updatedAt}</span>
                </p>
            </div>
            <hr />
            <article className="prose max-w-[100ch] internal-prose">
                <MDXRemote {...source} />
            </article>
        </div>
    );
}

export async function getStaticProps(context) {
    // console.log(context);
    const { DataStore } = withSSRContext(context);
    const { params } = context;
    const { slug } = params;
    const post = await DataStore.query(UntitledModel, slug);
    const { data, content } = matter(post.content);
    console.log(data, content);
    const mdxSource = await serialize(content);

    return {
        props: {
            data: {
                ...data,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
            },
            source: mdxSource,
        },
        revalidate: 60 * 60,
    };
}

export async function getStaticPaths(context) {
    const { DataStore } = withSSRContext(context);
    const posts = await DataStore.query(UntitledModel);
    const paths = posts.map((post) => ({ params: { slug: post.id } }));
    return {
        paths,
        fallback: true,
    };
}
