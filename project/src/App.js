import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import DisplyUser from './Components/DisplyUser';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import UpdatePassword from './Components/UpdatePassword';
import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/component/register"  component={Register} />
          <Route exact path="/component/login"  component={Login} />
          <Route exact path="/component/displyUser"  component={DisplyUser} />
          <Route exact path="/component/UpdatePassword"  component={UpdatePassword} />
          <Route exact path="/component/UserDashboard" component={UserDashboard} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
