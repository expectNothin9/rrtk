import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Explore } from '@material-ui/icons'

import { updateQuestion, fetchAnswer } from '../../features/mentor/mentorSlice'

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

export default Question
