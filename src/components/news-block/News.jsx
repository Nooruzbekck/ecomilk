import styled from "styled-components"
import { FirstInfoCard, SecondInfoCard } from "../../assets"

export default function News({ title }) {
  return (
    <NewsRecommendations>
      <h1>{title}</h1>
      <section>
        <img src={FirstInfoCard} alt="Первая информационная карточка" />
        <img src={SecondInfoCard} alt="Вторая информационная карточка" />
        <img src={FirstInfoCard} alt="Третья информационная карточка" />
      </section>
    </NewsRecommendations>
  )
}

const NewsRecommendations = styled.div`
  text-align: center;
  padding: 2rem;
  width: 100%;

  h1 {
    font-size: 6rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
  }

  img {
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    object-fit: cover;
  }
  @media (max-width: 896px) {
    width: 100%;
    img {
      max-width: 600px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    img {
      max-width: 40%;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
    h1 {
      font-size: 2rem;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    img {
      max-width: 400px;
    }
  }
`
