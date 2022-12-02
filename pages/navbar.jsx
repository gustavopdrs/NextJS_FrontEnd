// Write your code here
import Link from 'next/link'
import ThemeContext from '../ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <ul className="middle-items">
              <li className="list-item">
                  <Link href="/" className="link-light">HOME</Link>
                </li>
                <li className="list-item">
                  <Link href="/CSR" className="link-light">Estoque</Link>
                </li>
                <li className="list-item">
                  <Link href="/SSR" className="link-light">Entregas</Link>
                </li>
                <li className='list-item'>
                <Link href="/SSG" className="link-light">Funcionários</Link>  
                </li>
                <li className='list-item'>
                <Link href="/ISR" className="link-light">Notas</Link>    
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <li className="list-item">
                  <Link to="/" className="link-dark">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-dark">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar