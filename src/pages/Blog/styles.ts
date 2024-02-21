import styled from 'styled-components'

export const BlogSearchContainer = styled.div`
  margin-bottom: 3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.75rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const BlogPostsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 514px) {
    grid-template-columns: 1fr;
  }
`
