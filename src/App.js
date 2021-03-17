
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Importaciones de componentes y vistas
import Header from './components/Header/Header';
//
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/products" exact component={Products}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
