import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings'
import { Link } from 'react-router-dom'

const StyledLogo = styled.p`
  margin: 0 auto;
  padding: 0;
  height: 48px;
  font-size: 28px;
  line-height: 48px;

  a,
  a:visited {
    color: #000;
    text-decoration: none;
  }
`

const Logo = () => (
  <StyledLogo>
    <Link to="/">Quid</Link>
  </StyledLogo>
)

const StyledUserName = styled.p`
  position: absolute;
  top: 0;
  right: 48px;
  font-size: 18px;
  line-height: 48px;
  margin: 0;
  padding: 0 12px;
`
const UserName = ({ userName }) => <StyledUserName>{userName}</StyledUserName>

const StyledSettingsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;
  background: none;
`
const SettingsButton = () => (
  <StyledSettingsButton>
    <SettingsIcon fontSize="large" />
  </StyledSettingsButton>
)

const StyledUniHeader = styled.header`
  position: relative;
  border-bottom: 1px solid #ccc;
  height: 48px;
  div {
    height: 48px;
  }
`

const UniHeader = () => {
  return (
    <StyledUniHeader>
      <Logo />
      <UserName userName="rwen" />
      <SettingsButton />
    </StyledUniHeader>
  )
}

export default UniHeader
