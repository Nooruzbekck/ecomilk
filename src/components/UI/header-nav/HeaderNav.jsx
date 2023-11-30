import { Link } from "react-router-dom"
import styled from "styled-components"

export default function HeaderNav({ variant }) {
  const handleScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }

  return variant == "non_active" ? (
    <StyledHeaderNav>
      <Link to="/">Главная</Link>
      <Link to="/">О компании</Link>
      <Link to="/">Новости</Link>
      <Link to="/discounts">Акции</Link>
      <Link to="/">Каталог</Link>
      <Link to="/">Вакансии</Link>
    </StyledHeaderNav>
  ) : (
    <StyledHeaderNav>
      <Link to="/">Главная</Link>
      <a href="#about" onClick={handleScroll}>
        О компании
      </a>
      <a href="#news" onClick={handleScroll}>
        Новости
      </a>
      <Link to="/discounts">Акции</Link>
      <a href="#catalog" onClick={handleScroll}>
        Каталог
      </a>
      <a href="#vacancies" onClick={handleScroll}>
        Вакансии
      </a>
    </StyledHeaderNav>
  )
}

const StyledHeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  a {
    font-size: 1.25rem;
    color: #fff;
    transition: all 0.3s;
  }
  a:hover {
    color: #000;
  }
  @media (max-width: 1170px) {
    gap: 45px;
  }
  @media (max-width: 973px) {
    gap: 30px;
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 870px) {
    gap: 27px;
    a {
      font-size: 15px;
    }
  }

  @media (max-width: 770px) {
    gap: 60px;
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 30px;
    a {
      font-size: 0.875rem;
    }
  }
`
