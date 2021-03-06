import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path='/' exact component={Users} />
            <Route path='/places/new' component={NewPlace} />
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
