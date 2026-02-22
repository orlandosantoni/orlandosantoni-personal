import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
  h1: ({...props}) => (
    <h1
      className="font-serif text-3xl mt-10 mb-4 leading-tight"
      {...props}
    />
  ),
  h2: ({...props}) => (
    <h2
      className="font-serif text-2xl mt-10 mb-3 leading-snug"
      {...props}
    />
  ),
  h3: ({...props}) => (
    <h3
      className="font-medium text-xl mt-8 mb-2"
      {...props}
    />
  ),
  p: ({...props}) => (
    <p
      className="mt-5 leading-relaxed"
      {...props}
    />
  ),
  a: ({...props}) => (
    <a
      className="text-accent hover:underline font-medium"
      {...props}
    />
  ),
  ul: ({...props}) => (
    <ul className="mt-4 ml-6 list-disc space-y-1" {...props} />
  ),
  ol: ({...props}) => (
    <ol className="mt-4 ml-6 list-decimal space-y-1" {...props} />
  ),
  blockquote: ({...props}) => (
    <blockquote className="mt-6 border-l-2 border-rule pl-4 italic text-ink-muted" {...props} />
  ),
}

interface MdxProps {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components}/>
    </div>
  )
}
