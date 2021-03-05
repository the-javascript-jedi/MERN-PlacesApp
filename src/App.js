import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Users} exact />
          <Route path='/places/new' component={NewPlace} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
