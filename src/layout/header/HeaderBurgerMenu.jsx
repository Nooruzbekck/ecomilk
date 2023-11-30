import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderBurgerMenu = ({ variant, closeMenu }) => {
  const handleScroll = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })

    closeMenu()
  }

  return (
    <>
      <Backdrop onClick={closeMenu} />
      <Container>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>
        <StyledNav>
          {variant === "non_active" ? (
            <>
              <StyledLink to="/">Главная</StyledLink>
              <StyledLink to="/">О компании</StyledLink>
              <StyledLink to="/">Новости</StyledLink>
              <StyledLink to="/discounts">Акции</StyledLink>
              <StyledLink to="/">Каталог</StyledLink>
              <StyledLink to="/">Вакансии</StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/">Главная</StyledLink>
              <ScrollLink href="#about" onClick={handleScroll}>
                О компании
              </ScrollLink>
              <ScrollLink href="#news" onClick={handleScroll}>
                Новости
              </ScrollLink>
              <StyledLink to="/discounts">Акции</StyledLink>
              <ScrollLink href="#catalog" onClick={handleScroll}>
                Каталог
              </ScrollLink>
              <ScrollLink href="#vacancies" onClick={handleScroll}>
                Вакансии
              </ScrollLink>
            </>
          )}
        </StyledNav>
      </Container>
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  z-index: -2;
  height: 100vh;
  background-color: #2b2a2a85;
  top: 0;
  left: 0;
`
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  height: 100vh;
  background-color: #9c9c9c;
  right: -300px;
  z-index: 1000;
  overflow-y: auto;
  transition: right 0.5s ease, opacity 0.3s ease;
  display: none;
  border-top-left-radius: 0.5rem;
  z-index: 222;

  @media (max-width: 770px) {
    display: block;
    right: 0;
  }
`

const CloseButton = styled.span`
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  /* padding-left: 4rem; */
  animation: fadeIn 0.5s ease;
  color: #000;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  a {
    font-size: 1.25rem;
    color: #fff;
    transition: all 0.3s;
  }
  a:hover {
    color: #000;
  }

  @media (max-width: 770px) {
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.875rem;
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  padding-left: 35%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  transition: transform 0.3s ease;
  @media (max-width: 480px) {
    padding-left: 30%;
  }
  &:hover {
    transform: scale(1.05);
    background-color: gray;
  }
`

const ScrollLink = styled.a`
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 35%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: gray;
  }
  @media (max-width: 480px) {
    padding-left: 30%;
  }
`
