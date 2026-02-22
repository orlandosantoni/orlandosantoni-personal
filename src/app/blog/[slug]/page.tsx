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
    return <div className="text-center pt-16">Nothing to see here buddy!</div>
  }

  return (
    <article className="mx-auto max-w-2xl px-6 pt-12 pb-16">
      <h1 className="font-serif text-4xl leading-tight mb-3">{post.title}</h1>
      <div className="flex items-center gap-2 text-sm text-ink-muted italic mb-8">
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'MMMM d, yyyy')}
        </time>
        <span>·</span>
        <span>Orlando Santoni</span>
      </div>
      <div className="border-b border-rule mb-10"></div>
      <Mdx code={post.body.code} />
    </article>
  )
}
