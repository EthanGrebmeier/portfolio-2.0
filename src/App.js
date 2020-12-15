import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import PortfolioContent from './components/PortfolioContent/PortfolioContent'


function App() {
  return (
    <div className="portfolio">
    
      <Router>
        <Navigation />
        <Route exact path="/" render={ () => ( <PortfolioContent  page="Home" />) } />
        <Route exact path="/:page" render={ ({ match }) => (<PortfolioContent  page={match.params.page} />) } />
        <Route path="/projects/:project-name" component={PortfolioContent} />
      </Router>
    </div>

  );
}

export default App;
