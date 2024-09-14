import './index.scss'

export default function BlogList() {
  const articles: number[] = Array.from({ length: 10 }).fill(0) as number[]
  return (
    <div className="blog-list">
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{index + article}</li>
        ))}
      </ul>
    </div>
  )
}
