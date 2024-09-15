import { Avatar } from '@nextui-org/react'
import ChangeTheme from '../change-theme/ChangeTheme.tsx'
import './index.scss'

export default function PageTitle() {
  return (
    <header className="page-title bg-background">
      <img src="/blog.svg" alt="logo" className="logo" />
      <div className="flex">
        <ChangeTheme />
        <a href="https://github.com/rookie-ysj" target="_blank">
          <Avatar src="/github.svg" className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}
