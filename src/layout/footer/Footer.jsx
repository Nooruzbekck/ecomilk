import styled from "styled-components"

export default function Footer() {
  return (
    <StyledFooterMain>
      <hr />
      <article>
        <p>
          Используем cookies для корректной работы сайта, персонализации пользователей и других
          целей, предусмотренных
          <a href="https://kontur.ru/about/policy">политикой обработки персональных данных.</a>
        </p>
        <span>© ОсОО &quot;Кант-Сут&quot;, 2023</span>
      </article>
    </StyledFooterMain>
  )
}

const StyledFooterMain = styled.footer`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  margin: 20px 0;
  padding: 20px 80px;
  gap: 1.5rem;

  hr {
    border: 1px solid #c4c4c4;
    border-radius: 2px;
  }
  article {
    display: flex;
    justify-content: space-between;
    color: #b5b5b5;
    font-size: 13px;
  }
  a {
    border-bottom: 1px solid #b5b5b5;
    color: #b5b5b5;
    margin-left: 2px;
  }
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;

    article {
      flex-direction: column;
      align-items: center;
    }
  }
`
