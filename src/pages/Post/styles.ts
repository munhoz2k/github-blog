import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-profile']};

  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const PostProfileTop = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    text-transform: uppercase;

    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const PostProfileInfos = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${(props) => props.theme['base-label']};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 6px;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 336px) {
    flex-direction: column;
    gap: 8px;
  }
`

export const PostContent = styled.section`
  padding: 2.5rem 2rem;
`
