import styled from "styled-components"
import { motion } from "framer-motion"

export default function SliderItem({ bgimage, action_element }) {
  return (
    <StyledSliderItem className={bgimage}>
      <MyCustomComponent action_element={action_element} />
    </StyledSliderItem>
  )
}

const StyledSliderItem = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${({ className }) => className});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 70vh;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 55vh;
    background-size: cover;
  }
`
const MyCustomComponent = styled(motion.div)`
  background-image: url(${({ action_element }) => action_element});
  background-size: cover;
  background-position: center;
  width: 800px;
  height: 800px;

  @media (max-width: 900px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`
