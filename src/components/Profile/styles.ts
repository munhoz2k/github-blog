import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 1.75rem;
  padding: 2rem;
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;

  border-radius: 10px;

  img {
    width: 100%;
    max-width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem 0;
  }

  @media (max-width: 515px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  a {
    display: flex;

    height: fit-content;
    gap: 4px;
    padding: 2px;

    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.blue};
    }
  }
`

export const ProfileInfos = styled.div`
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
