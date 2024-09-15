import type { Params } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
import { useLoaderData } from 'react-router-dom'
import './index.scss'

const string = '# 要学的东西\n'
  + '\n'
  + '打包\n'
  + '\n'
  + 'vite/config\n'
  + '\n'
  + '前端优化，tree-shaking\n'
  + '\n'
  + 'vue\n'
  + '\n'
  + 'react\n'
  + '\n'
  + 'SSR\n'
  + '\n'
  + '网络\n'
  + '\n'
  + '\n'
  + '\n'
  + '# 要做的项目\n'
  + '\n'
  + '1. 个人博客（把上面学的东西都放上去）\n'
  + '2. 待定'

export default function Article() {
  const params = useLoaderData() as { id: string }
  return (
    <article className="article">
      我是
      {params.id}
      <MDEditor.Markdown source={string} style={{ whiteSpace: 'pre-wrap' }} className="text-foreground bg-background" />
    </article>

  )
}

export function articleLoader({ params }: { params: Params }): Params {
  return params
}
