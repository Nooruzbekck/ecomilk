import React from "react"
import styled from "styled-components"
import { useCategoryMilk } from "../../hooks/useCategoryMilk"

import { Card } from "../UI/card/Card"
import { InfoProductList } from "./CatalogCard"
import { catalogItem } from "../../utils/constants"

export const InfoProduct = () => {
  const { category } = useCategoryMilk()

  const newCatalogItem = catalogItem.find((item) => item.name === category)

  return (
    <WrapperProductInfo>
      <CatalogTitle>Каталог</CatalogTitle>

      <ContainerForImgCard>
        <ContainerImage>
          {newCatalogItem?.additionalImg?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ContainerImage>
        <InfoProductList {...newCatalogItem} />
      </ContainerForImgCard>
    </WrapperProductInfo>
  )
}

const WrapperProductInfo = styled.div`
  max-width: 1920px;
  margin-bottom: 50px;
`

const ContainerForImgCard = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 165px;
  @media (max-width: 1015px) {
    flex-wrap: wrap-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    padding: 0;
  }
  @media (max-width: 480px) {
    padding: 0 30px;
  }
`

const CatalogTitle = styled.h1`
  text-align: center;
  font-size: 100px;
  font-weight: 800;
  @media (max-width: 480px) {
    font-size: 4rem;
  }
`

const ContainerImage = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  @media (max-width: 1115px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 30px;
  }

  & h3 {
    padding-bottom: 20px;
  }
`
