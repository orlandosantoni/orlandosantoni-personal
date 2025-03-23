import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time className="text-sm" dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="mb-1 text-2xl">
        <Link href={post.url} className="hover:text-green-700">
          {post.title}
        </Link>
      </h2>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="max-w-xl mx-auto mb-8">
      {posts.map(post => (
        <PostCard {...post} key={post._id}/>
      ))}
    </div>
  );
}
