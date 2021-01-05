import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledBrief = styled.article`
  width: 50%;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 48px;

  h2 {
    font-size: 40px;
    margin: 0;
  }
  p {
    font-size: 20px;
    margin: 0;
    margin-top: 12px;
  }
`

const Brief = () => (
  <StyledBrief>
    <h2>Pro</h2>
    <p>
      Start with one of our built-in datasets or upload your own data to examine any strategic
      question in depth.
    </p>
  </StyledBrief>
)

const StyledLink = styled(Link)`
  display: inline-block;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  padding: 16px 48px;
  border: 1px solid #000;
  border-radius: 4px;
`

const StyledLandingEntrance = styled.section`
  padding: 36px 12px;
`
const LandingEntrance = () => (
  <StyledLandingEntrance>
    <Brief />
    <StyledLink to="/projects">Launch Pro</StyledLink>
  </StyledLandingEntrance>
)

export default LandingEntrance
