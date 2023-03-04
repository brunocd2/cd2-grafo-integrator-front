import styled from 'styled-components'

export const ForgotPasswordContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  > img {
    width: 278px;
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 1.5rem;
    color: var(--black2);
  }

  p {
    font-family: Inter, 'sans-serif';
    font-size: 24px;
    font-weight: 500;
    max-width: 416px;
    text-align: center;
    color: var(--gray3);
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    > button {
      background: var(--branding);
      width: 315px;
      height: 40px;
      color: var(--white);
      font-weight: 500;
      font-size: 20px;
      margin: 2rem 0;
      border-radius: 4px;
    }

    a {
      font-size: 1rem;
      color: var(--gray3);
      font-family: Poppins, sans-serif;
      text-decoration: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 0.8rem;
        font-size: 1.5rem;
      }
    }
  }
`