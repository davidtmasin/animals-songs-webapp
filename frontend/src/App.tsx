//Este import tornou-se opcional desde a versão 17 do React, sendo assim, ele pode ser removido do código
//import React from 'react'
import Footer from 'components/Footer'
import NavBar from './components/NavBar'
import ImgLogo from 'assets/img/logo.png'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <ul className="imageAnimals">
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
        </ul>

        <ul className="imageAnimals">
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
          <li>
            <img src={ImgLogo} width="100" alt="animal1" />
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default App
