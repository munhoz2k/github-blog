import { Outlet } from 'react-router-dom'

import { HeaderContainer, MainContentContainer } from './styles'
import logo from '../../assets/github-blog-logo.svg'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>

      <MainContentContainer>
        <Outlet />
      </MainContentContainer>
    </>
  )
}
