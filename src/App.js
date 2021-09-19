import './App.css';
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import NewEnquiryPage from './components/NewEnquiryPage/NewEnquiryPage'
import MoreInfoPage from './components/MoreInfoPage/MoreInfoPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/new-enquiry' exact>
          <NewEnquiryPage />
        </Route>
        <Route path='/more-info' exact>
          <MoreInfoPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
