import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <div>
      <Link to="/">
          <h1>DIGI-MONEY</h1>
      </Link>
      <div>
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default NavBar