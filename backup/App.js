import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path='/' exact component={Users} />
            {/* Dynamic Route Path with dynamic user id - :userId */}
            <Route path='/:userId/places' component={UserPlaces} exact />
            <Route path='/places/new' component={NewPlace} />
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
//maps api key AIzaSyAq578NuN3Edm7H2R1tkbAtrMCfT7MooN0
