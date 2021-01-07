import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: var(--section-padding);
  h1 {
    display: flex;
    flex-direction: column;
    em {
      font-size: 64px;
      font-weight: bold;
    }
    span {
      margin-top: var(--space-xs);
      font-size: 28px;
    }
  }
`
const Header = () => (
  <StyledHeader>
    <h1>
      <em>負能量</em>
      <span>生活指引卡</span>
    </h1>
  </StyledHeader>
)

export default Header
