import styled from 'styled-components'

const StyledUniHeader = styled.header`
  position: relative;
  border-bottom: 1px solid #ccc;

  div {
    height: 48px;
  }

  div:nth-child(1) {
    font-size: 32px;
    line-height: 48px;
  }

  div:nth-child(2),
  div:nth-child(3) {
    position: absolute;
    top: 0;
  }
`

const UniHeader = () => {
  return (
    <StyledUniHeader>
      <div>Quid</div>
      <div>username</div>
      <div>settings</div>
    </StyledUniHeader>
  )
}

export default UniHeader
