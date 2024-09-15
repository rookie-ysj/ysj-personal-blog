import { Avatar } from '@nextui-org/react'
import ChangeTheme from '../change-theme/ChangeTheme.tsx'
import './index.scss'

export default function PageTitle() {
  const a = 1
  return (
    <header className="page-title bg-background">
      <img
        src="/blog.svg"
        alt="logo"
        className="logo cursor-pointer"
        onClick={() => window.location.replace(window.location.origin)}
      />
      <div className="flex">
        <ChangeTheme />
        <a href="https://github.com/rookie-ysj" target="_blank">
          <Avatar src="/github.svg" className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}
