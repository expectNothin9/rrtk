import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Question from './Question'
import Answer from './Answer'

const Main = styled.main`
  --section-padding: var(--space-xxxl);
  @media only screen and (max-width: 428px) {
    --section-padding: var(--space-m);
  }
`
const NegativeEnergyMentor = () => (
  <Main>
    <Header />
    <Question />
    <Answer />
  </Main>
)

export default NegativeEnergyMentor
