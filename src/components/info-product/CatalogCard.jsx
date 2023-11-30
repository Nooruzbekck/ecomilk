import React from "react"
import styled from "styled-components"
import { useCategoryMilk } from "../../hooks/useCategoryMilk"
import { cardItems } from "../../utils/constants"

export const InfoProductList = ({ packageName, fatPercentage, liter, day }) => {
  const { category } = useCategoryMilk()
  const newCategory = cardItems.find((item) => item.title === category)

  return (
    <CatalogContainer>
      <InfoAboutProduct className={newCategory?.colorCard}>
        <li>
          Вид упаковки <span>{packageName}</span>
        </li>
        <li>
          Содержание жира <span>{fatPercentage}</span>
        </li>
        <li>
          Срок хранения
          <span>{day}</span>
        </li>
        <li>
          Объем
          <span>{liter}</span>
        </li>
      </InfoAboutProduct>
      <InformationDegree> Хранить при температуре от +2°C до +6°C</InformationDegree>
    </CatalogContainer>
  )
}
const CatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-right: 60px;
  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 20px;
    padding: 80px;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`
const InfoAboutProduct = styled.ul`
  list-style: none;
  & li {
    width: 500px;

    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 24px;
    font-weight: 800px;
    color: #242424;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  & li:nth-of-type(2n + 1) {
    background-color: ${(props) => props.className};
    color: #fff;
  }
`
const InformationDegree = styled.p`
  color: #b5b5b5;
  font-size: 22px;
  font-weight: 300;
  line-height: 27px;
`
