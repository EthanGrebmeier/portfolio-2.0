import './App.scss';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import PortfolioContent from './components/PortfolioContent/PortfolioContent'
import MobileBurger from './components/MobileBurger/MobileBurger'

import Sorter from './projects/Sorter/App'
import SayHello from './projects/SayHello/App'
import Reader from './projects/Reader/App'
import Guesser from './projects/Guesser/App'


import {getColorsObject, getColors} from './components/colors/colors.js'

function App() {

  let [colorMode, setColorMode] = useState("light")
  let [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      setColorMode("dark")
    }
  }, [])

  let renderMobileNav = () => {
    if (showMobileNav) {
      return <Navigation showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} getColorsObject={getColorsObject} getColors={getColors} colorMode={colorMode} switchColorMode={setColorMode} />
    }
  }

  return (
    <div className="portfolio">
      <MobileBurger getColors={getColors} colorMode={colorMode} showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
      
      <Router>
        {renderMobileNav()}
        <Navigation isDesktop={true} getColorsObject={getColorsObject} getColors={getColors} colorMode={colorMode} switchColorMode={setColorMode} />

        <Route exact path="/" render={ () => ( <Redirect to="/about" />) } />
        <Route exact path="/:page" render={ ({ match }) => (<PortfolioContent key={match.params.page} setShowMobileNav={setShowMobileNav} page={match.params.page} getColors={getColors} getColorsObject={getColorsObject} colorMode={colorMode} switchColorMode={setColorMode}/>) } />
        <Route path="/projects/:projectName" render={ ({ match }) => (<PortfolioContent key={match.params.projectName} setShowMobileNav={setShowMobileNav} page="project" projectName={match.params.projectName} getColors={getColors} getColorsObject={getColorsObject} colorMode={colorMode} switchColorMode={setColorMode}/>) } />

        <Route exact path="/demo/sorter" component={Sorter} />
        <Route exact path="/demo/say-hello" component={SayHello} />
        <Route exact path="/demo/reader" component={Reader} />
        <Route exact path="/demo/guesser" component={Guesser} />

        <span className="connector-container">

          <span className="connector" id="connector-1">
            <span className="connector-primary" style={getColorsObject(colorMode, "primary", "background")}></span>
            <span className="connector-secondary" style={getColorsObject(colorMode, "secondary", "background")} ></span>
          </span>

          <span className="connector" id="connector-2">
            <span className="connector-primary" style={getColorsObject(colorMode, "primary", "background")}></span>
            <span className="connector-secondary" style={getColorsObject(colorMode, "secondary", "background")} ></span>
          </span>

          <span className="connector" id="connector-3">
            <span className="connector-primary" style={getColorsObject(colorMode, "primary", "background")}></span>
            <span className="connector-secondary" style={getColorsObject(colorMode, "secondary", "background")} ></span>
          </span>
          
        </span>

      </Router>
    </div>

  );
}

export default App;
