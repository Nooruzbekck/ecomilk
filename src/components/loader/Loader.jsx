import { css } from "@emotion/react"
import { BeatLoader } from "react-spinners"
import styled from "styled-components"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoadingIndicator = () => (
  <LoaderContainer>
    <BeatLoader css={override} size={30} color={"#123abc"} loading={true} />
  </LoaderContainer>
)

export default LoadingIndicator
