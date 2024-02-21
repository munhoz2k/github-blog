import styled from 'styled-components'

export const PostContainer = styled.a`
  background: ${(props) => props.theme['base-post']};

  text-decoration: none;

  width: 100%;
  min-width: 200px;
  padding: 1.5rem;
  border-radius: 10px;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-profile']};
  }

  .markdown {
    white-space: pre-wrap;

    h1,
    h2,
    h3,
    strong {
      color: ${(props) => props.theme['base-title']};
      font-weight: 700;
    }

    a {
      color: ${(props) => props.theme.blue};
    }

    img {
      width: 0%;
      height: 0%;
    }
  }
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 1rem;
  margin-bottom: 0.5rem;

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
`
