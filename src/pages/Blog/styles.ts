import styled from 'styled-components'

export const BlogSearchContainer = styled.form`
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

  input {
    background: ${(props) => props.theme['base-input']};

    width: 100%;
    padding: 1rem;

    border: 2px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
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

export const PostContainer = styled.a`
  background: ${(props) => props.theme['base-post']};

  text-decoration: none;

  padding: 1.5rem;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;

    max-width: 70%;
    margin-bottom: 0.75rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  p.overflow {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &:hover {
    background: ${(props) => props.theme['base-background']};
  }
`
