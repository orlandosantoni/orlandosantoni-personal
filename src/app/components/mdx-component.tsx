import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
  h1: ({...props}) => (
    <h1 
      className="mt-2 text-4xl font-bold tracking-tight text-red-300"
      {...props} 
    />
  ),
  h2: ({...props}) => (
    <h2 
      className="mt-10 pb-1 text-2xl font-semibold tracking-tight"
      {...props} 
    />
  ),
  p: ({...props}) => (
    <p 
      className="mt-4 text-base leading-7"
      {...props} 
    />
  ),
  a: ({...props}) => (
    <a 
      className="mt-4 text-base leading-7 font-semibold hover:underline"
      {...props} 
    />
  )
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