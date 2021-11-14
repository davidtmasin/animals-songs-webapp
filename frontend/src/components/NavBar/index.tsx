// import { Link } from 'react-router-dom'
import ImgLogo from 'assets/img/logo.png'
function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <a href="/">
            <img src={ImgLogo} alt="Logo Loucos Por Pets" width="100" />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
