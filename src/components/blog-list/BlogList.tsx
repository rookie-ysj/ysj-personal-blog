import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function BlogList() {
  const articles: Article[] = getArticles()
  return (
    <div className="blog-list">
      {articles.map((article, index) => (
        <Link to={`/article/${article.id}`} key={index}>
          <Card shadow="sm" radius="lg" className="mb-2">
            <CardHeader>
              <header>
                {article.title}
              </header>
            </CardHeader>
            <CardBody>
              <main>{article.description}</main>
            </CardBody>
            <CardFooter>
              <footer>
                {article.createTime}
              </footer>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function getArticles(): Article[] {
  return [
    {
      id: '1',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },
    {
      id: '2',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },
    {
      id: '3',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },
    {
      id: '4',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },
    {
      id: '5',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },
    {
      id: '6',
      title: '标题1',
      description: '第一篇文章',
      content: '',
      type: '1',
      createTime: '2024-09-15',
    },

  ]
}
