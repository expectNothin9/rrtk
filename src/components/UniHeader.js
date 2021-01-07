import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SettingsIcon from '@material-ui/icons/Settings'
import { Link } from 'react-router-dom'

const StyledLogo = styled.p`
  display: inline-block;
  margin: 0 auto;
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

const StyledSettings = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  display: flex;

  .user-name {
    font-size: 18px;
    line-height: 48px;
    padding: 0 12px;
  }
  .settings-button {
    width: 48px;
    height: 48px;
    border: none;
    padding: 0;
    background: none;
  }
`
const Settings = ({ user }) => (
  <StyledSettings>
    <p className="user-name">{`${user.firstName} ${user.lastName}`}</p>
    <button className="settings-button">
      <SettingsIcon fontSize="large" />
    </button>
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
  display: flex;
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
