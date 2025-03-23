import Mdx from "@/app/components/mdx-component";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  if (!post?.body.code) {
    return <div className="text-center">Nothing to see here buddy!</div>
  }

  return (
    <article className="mx-auto max-w-3xl pb-16">
      <div className="text-left">
        <h1 className="pb-1 text-4xl font-semibold tracking-tight">{post.title}</h1>
        <div className="flex mb-8">
          <time className="text-sm" dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <p className="text-sm">&nbsp;•&nbsp;Orlando Santoni</p>
        </div>
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}