import './App.css';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Loading from './pages/Loading'
import NotFound from './pages/NotFound'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import LoginPage from './pages/LoginPage'

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('access_token')) {
      next();
    }
    next.redirect('/');
  } else {
    next();
  }
};

function App() {
  return (
    <Router>
      <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
        <div className="App">
          <Switch>
            <GuardedRoute path="/dashboard" meta={{ auth: true }}>
              <Dashboard />
            </GuardedRoute>
            <GuardedRoute exact path="/about">
              <About />
            </GuardedRoute>
            <GuardedRoute exact path="/contact">
              <ContactUs />
            </GuardedRoute>
            <GuardedRoute exact path="/">
              <LoginPage />
            </GuardedRoute>
          </Switch>
        </div>
      </GuardProvider>
    </Router>
  );
}

export default App;
