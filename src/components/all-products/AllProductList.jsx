import React from "react"
import styled from "styled-components"
import { cardItems } from "../../utils/constants.js"
import { Card } from "../UI/card/Card.jsx"

export const AllProductList = ({ title }) => {
  return (
    <>
      {title && <TitleText>Каталог</TitleText>}
      <Wrapper>
        {cardItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 1115px) {
    width: 100%;
    justify-content: center;
  }
`
const TitleText = styled.h1`
  font-size: 100px;
  margin: 60px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4rem;
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin: 1.5rem 0;
  }
`
