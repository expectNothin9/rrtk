import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Explore } from '@material-ui/icons'
import styled from 'styled-components'

import { updateQuestion, fetchAnswer } from '../../features/mentor/mentorSlice'

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

const StyledQuestionForm = styled.form`
  display: flex;
  padding: var(--section-padding);
  label {
    flex-grow: 1;
    padding-right: var(--space-xl);
    display: flex;
    align-items: center;
    input {
      width: 100%;
      height: 40px;
      font-size: 28px;
      padding: 0 var(--space-s);
      border: none;
      border-bottom: 2px solid #000;
      outline: none;
    }
  }
  button {
    border: none;
    background: none;
    flex-basis: 64px;
    height: 64px;
    padding: 0;
  }
  @keyframes explore {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  button.loading {
    color: #6aa3ea;
    animation-name: explore;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  button.succeeded {
    color: #81c963;
  }
`

const Question = () => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.mentor.status)
  const question = useSelector((state) => state.mentor.question)
  const submitDisabled = question === '' || status === 'loading'

  const handleUpdateQuestion = useCallback(
    (event) => {
      dispatch(updateQuestion(event.target.value))
    },
    [dispatch]
  )
  const handleFetchAnswer = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(fetchAnswer())
    },
    [dispatch]
  )
  return (
    <StyledQuestionForm onSubmit={handleFetchAnswer}>
      <label>
        <input
          type="text"
          name="question"
          value={question}
          placeholder="你有什麼問題？"
          onChange={handleUpdateQuestion}
        />
      </label>
      <button type="submit" disabled={submitDisabled} className={status}>
        <Explore style={{ fontSize: 52 }} />
      </button>
    </StyledQuestionForm>
  )
}

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

const Box = styled.div`
  --section-padding: var(--space-xxxl);
  @media only screen and (max-width: 428px) {
    --section-padding: var(--space-m);
  }
`
const NegativeEnergyMentor = () => (
  <Box>
    <Header />
    <Question />
    <Answer />
  </Box>
)

export default NegativeEnergyMentor
