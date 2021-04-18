import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  )
}

export default Layout

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`
/* display: grid;
  grid-template-rows: 152px 1fr auto;
  max-width: 1200px;
  height: calc(100vh - 64px);
  margin: 0 auto;
  align-items: center;
  @media (min-width: 600px) {
    grid-template-rows: 212px 1fr auto;
  }
` */
