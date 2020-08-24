import React from "react"
import NavBar from "./SecureNavbar"

const SecureLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default SecureLayout
