import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import Article, { articleLoader } from '../components/atricle/Article.tsx'
import BlogList from '../components/blog-list/BlogList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <BlogList />,
      },
      {
        path: '/article/:id',
        element: <Article />,
        loader: articleLoader,
      },
    ],
  },
])

export default router
