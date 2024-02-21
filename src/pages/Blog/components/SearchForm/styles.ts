import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;

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

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    padding: 1rem;

    color: ${(props) => props.theme['base-span']};
    background: ${(props) => props.theme['base-border']};

    border: none;
    border-radius: 6px;

    svg {
      pointer-events: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: ghostwhite;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['base-post']};
      cursor: pointer;
    }
  }
`
