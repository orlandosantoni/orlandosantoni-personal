import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

function PostCard(post: Post) {
  return (
    <div className="mb-10 group">
      <time className="block text-xs tracking-widest uppercase text-ink-muted mb-1.5" dateTime={post.date}>
        {format(parseISO(post.date), 'MMMM d, yyyy')}
      </time>
      <h2 className="font-serif text-2xl leading-snug">
        <Link href={post.url} className="hover:text-accent transition-colors">
          {post.title}
        </Link>
      </h2>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="max-w-2xl mx-auto px-6 pt-12 pb-16">
      {posts.map(post => (
        <PostCard {...post} key={post._id}/>
      ))}
    </main>
  );
}
