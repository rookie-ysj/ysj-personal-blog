import { Outlet } from 'react-router-dom'
import PageTitle from './components/page-title/PageTitle.tsx'
import { useCustomSelector } from './hooks/useStore.ts'
import './App.css'

function App() {
  const theme = useCustomSelector(state => state.theme.theme)
  return (
    <main className={`text-foreground bg-background ${theme}`}>
      <PageTitle />
      <div style={{ maxHeight: 'calc(100% - 100px)' }}>
        <Outlet />
      </div>
    </main>
  )
}

export default App
