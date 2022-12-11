import { Container } from "@mui/material"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="over">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout