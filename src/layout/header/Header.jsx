import { Link } from "react-router-dom"
import styled from "styled-components"
import HeaderNav from "../../components/UI/header-nav/HeaderNav"
import { useState } from "react"
import { HeaderBurgerMenu } from "./HeaderBurgerMenu"

export default function Header({ variant }) {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNavVisibility = () => {
    setIsNavVisible((prev) => !prev)
  }
  return (
    <StyledHeaderMain>
      <Link to="/">
        <img src="/logo.svg" alt="ecomilk logo" />
      </Link>
      <HeaderNav variant={variant} />
      <BurgerContainer onClick={toggleNavVisibility}>
        <BurgerIcon>&#9776;</BurgerIcon>
      </BurgerContainer>
      {isNavVisible ? <HeaderBurgerMenu variant={variant} closeMenu={toggleNavVisibility} /> : null}
      <StyledHeaderButton>Позвонить нам</StyledHeaderButton>
    </StyledHeaderMain>
  )
}
const BurgerContainer = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 770px) {
    display: block;
  }
`

const BurgerIcon = styled.div`
  font-size: 2rem;
  color: #ffffff;
`

const StyledHeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  margin: auto;

  position: absolute;
  z-index: 3;
  top: 20px;
  max-width: 1920px;
  width: 100%;

  img {
    width: 60px;
  }
  @media (max-width: 1200px) {
    margin: auto;
    padding: 0 40px;
    img {
      width: 50px;
    }
  }

  @media (max-width: 770px) {
    padding: 0 20px;
    width: 100%;
    img {
      width: 40px;
    }
    nav {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    img {
      width: 30px;
    }
  }
`

const StyledHeaderButton = styled.button`
  width: 200px;
  border: none;
  font-weight: 800;
  font-size: 1.25rem;
  border-radius: 16px;
  height: 50px;
  padding: 10px 13px;
  color: #000;
  background-color: #fff;
  transition: all 0.3s;

  @media (max-width: 1300px) {
    width: 170px;
    height: 45px;
    font-size: 18px;
  }

  @media (max-width: 930px) {
    display: none;
  }
`
