import { Avatar } from '@nextui-org/react'
import './index.scss'

export default function PageTitle() {
  return (
    <header className="page-title">
      <img src="/ysj.svg" alt="logo" className="logo" />
      <div className="flex">
        哈哈哈
        <a href="https://github.com/rookie-ysj" target="_blank">
          <Avatar src="/github.svg" className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}
