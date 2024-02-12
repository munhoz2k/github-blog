import styled from 'styled-components'
import headerBackground from '../../assets/header-background.png'

export const HeaderContainer = styled.div`
  background-image: url(${headerBackground});
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 296px;

  img {
    margin-bottom: 3rem;
  }
`

export const MainContentContainer = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 0 1rem 2rem 1rem;
`
