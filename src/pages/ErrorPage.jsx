import { styled } from "styled-components"
import { useRouteError, Link } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <StyledErrorPage>
      <h1>Опаньки!</h1>
      <p>К сожалению, произошла неожиданная ошибка.</p>
      <p>Возможно нет такой страницы</p>
      <p>
        <i>
          сообщение об ошибке: <span>{error.statusText || error.message}</span>
        </i>
      </p>
      <StyledLink to="/">Вернуться на главную страницу</StyledLink>
    </StyledErrorPage>
  )
}

export default ErrorPage

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  gap: 1rem;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  i {
    font-size: 1rem;
  }
  span {
    color: red;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
