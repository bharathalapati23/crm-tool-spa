import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import NewEnquiryPage from "./components/NewEnquiryPage/NewEnquiryPage";
import MoreInfoPage from "./components/MoreInfoPage/MoreInfoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem("user", "Aditya");
  }
  const [userName, setUserName] = React.useState(localStorage.getItem("user"));

  const changeUserName = (e) => {
    localStorage.setItem("user", e.target.value);
    setUserName(e.target.value);
  };

  return (
    <Router>
      <NavBar userName={userName} changeUserName={changeUserName} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/new-enquiry" exact>
          <NewEnquiryPage />
        </Route>
        <Route path="/more-info" exact>
          <MoreInfoPage userName={userName} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
