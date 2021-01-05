import React from 'react'
import PropTypes from 'prop-types'
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

const StyledSettingsButton = styled.button`
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

const StyledSettings = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  display: flex;

  p {
    font-size: 18px;
    line-height: 48px;
    margin: 0;
    padding: 0 12px;
  }
`
const Settings = ({ user }) => (
  <StyledSettings>
    <p>{`${user.firstName} ${user.lastName}`}</p>
    <SettingsButton />
  </StyledSettings>
)
Settings.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })
}

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
      <Settings user={{ firstName: 'ray', lastName: 'wen' }} />
    </StyledUniHeader>
  )
}

export default UniHeader
