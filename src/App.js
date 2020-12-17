import './App.scss';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import PortfolioContent from './components/PortfolioContent/PortfolioContent'


function App() {
  return (
    <div className="portfolio">
    
      <Router>
        <Navigation />
        <Route exact path="/" render={ () => ( <Redirect to="/about" />) } />
        <Route exact path="/:page" render={ ({ match }) => (<PortfolioContent  page={match.params.page} />) } />
        <Route path="/projects/:projectName" render={ ({ match }) => (<PortfolioContent  page="project" projectName={match.params.projectName} />) } />
      </Router>
    </div>

  );
}

export default App;
