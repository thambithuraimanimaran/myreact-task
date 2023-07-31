
import { Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { UserDetails } from './Data/UserDetails';
import {Route} from "react-router-dom"
import { useState } from 'react';
import { data } from './Data/Data';
import { AddUser } from './Data/Adduser';
import { NoPage } from './Nopagecomponent/NoPage';
import { UserViewdata } from './Viewdata/UserViewData';
import { EditData } from './Data/Editcomponent';


function App() {
  const [user,setUser] = useState(data);
  return (
    <div className="App">
     
    <Switch>
    <Route exact path="/">
    <UserDetails
    user={user}
    setUser={setUser}/>
    </Route>

    <Route path="/AddUser">
    <AddUser
       user={user}
       setUser={setUser}/>
    </Route>

      <Route path="/viewuser/:id">
        <UserViewdata
        user={user}/>
      </Route>

    <Route path="/edit/:id">
    <EditData
    user={user}
    setUser={setUser}/>
    </Route>
    
    <Route path="**">
      <NoPage/>
    </Route>


    </Switch>



      


    </div>
  );
}

export default App;
