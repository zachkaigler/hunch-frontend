import Footer from "./footer/Footer";
import Landing from "./landing/Landing";
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard";
import Nav from "./nav/Nav";

function App() {
  // Set to null to go to landing page
  // TODO: Replace with actual user functionality
  let user = null

  return (
    <div className="App">
      <div>
        { user ? <Nav /> : null }
        <Switch>
          <Route exact path="/">
            { user ? <Redirect to="/dashboard"/> : <Landing /> }
          </Route>
          <Route exact path="/dashboard">
            { user ? <Dashboard /> : <Redirect to="/" /> }
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
