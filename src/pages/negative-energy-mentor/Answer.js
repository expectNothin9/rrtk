import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledAnswer = styled.section`
  padding: var(--section-padding);
  p {
    font-size: 64px;
    font-weight: bold;
    padding-left: var(--space-xxxl);
    position: relative;
    &:before {
      content: '“';
      position: absolute;
      left: 0;
      top: -32px;
      color: #aaa;
    }
  }
`
const Answer = () => {
  const status = useSelector((state) => state.mentor.status)
  const answer = useSelector((state) => state.mentor.answer)
  switch (status) {
    case 'succeeded':
      return (
        <StyledAnswer>
          <p>{answer.quote}</p>
        </StyledAnswer>
      )
    default:
      return null
  }
}

export default Answer
