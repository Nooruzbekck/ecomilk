import React from "react"
import styled from "styled-components"
import { Button } from "../button/Button"
import { CardImage } from "./CardImage"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export const Card = ({ title, titlePercent, colorCard, width, height, image }) => {
  let navigate = useNavigate()

  const handleNavigateToProductPage = (productTitle) => {
    navigate(`/product-info?title=${encodeURIComponent(productTitle)}`)
  }

  return (
    <ContainerItem className={colorCard} id={colorCard}>
      <CardImage width={width} height={height} image={image} />
      <NameCatalog className={titlePercent}>
        {titlePercent ? (
          <h3>{titlePercent}</h3>
        ) : (
          <>
            <h3>{title}</h3>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              color={colorCard}
              onClick={() => handleNavigateToProductPage(title)}
              href="#catalog-cover"
            >
              Узнать подробнее
            </Button>
          </>
        )}
      </NameCatalog>
    </ContainerItem>
  )
}

const ContainerItem = styled.div`
  max-width: 400px;
  width: 100%;
  height: 574px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  background-color: ${(props) => props.className};
  @media (min-width: 655px) and (max-width: 880px) {
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  @media (width: 480px) {
    width: 500px;
    position: none;
  }

  ::before {
    display: ${(props) => (props.id === "#B5CB07" ? "inline-block" : "none")};
    content: url("/flower.svg");
    position: absolute;
    left: -40px;
    bottom: -80px;
  }

  ::after {
    display: ${(props) => (props.id === "#B5CB07" ? "inline-block" : "none")};
    content: url("/flower.svg");
    position: absolute;
    bottom: 480px;
    right: -45px;
  }

  @media (max-width: 1000px) {
    ::before,
    ::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    max-width: 400px;
    padding: 20px;
  }
`

const NameCatalog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  align-items: center;
  position: absolute;
  bottom: 20px;

  h3 {
    font-size: 28px;
    color: #ffffff;
    font-weight: 800px;
    text-align: center;
    line-height: 25.3px;
  }

  .aNavigation {
    font-size: 18px;
    font-weight: 600;
    line-height: 34.3px;
    font-family: "Gilroy-Bold";
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 20px;
    }

    button {
      font-size: 14px;
    }
  }
`
