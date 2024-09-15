import { Avatar } from '@nextui-org/react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/useStore.ts'
import { changeTheme } from '../../store/theme.ts'

export default function ChangeTheme() {
  const dispatch = useCustomDispatch()
  const theme = useCustomSelector(state => state.theme.theme)
  return (
    <>
      <Avatar
        className="cursor-pointer w-4 h-4 mr-2"
        src={theme === 'light' ? '/sun.svg' : 'moon.svg'}
        onClick={() => dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))}
      />
    </>
  )
}
