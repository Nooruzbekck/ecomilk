import Header from "./header/Header"
import Footer from "./footer/Footer"
import styled from "styled-components"

function Layout({ children }) {
  return (
    <StyledLayoutMain>
      <Header />
      <div>{children}</div>
      <Footer />
    </StyledLayoutMain>
  )
}

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}

const StyledLayoutMain = styled.div`
  max-width: 100%;

  height: 100vh;
  display: flex;
  flex-direction: column;
`
