import React from "react"
import chefClaudeIcon from "../images/chef-claude-icon.png"
const Header = () => {
 return (
  <header className="header">
   <img className="icon" src={chefClaudeIcon} alt="Chef Claude Icon" />
   <h1 className="title">Chef Claude</h1>
  </header>
 )
}

export default Header
