import React from 'react';
import styles from "./App.module.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {HomePage,SignInPage, RegisterPage,DetailPage} from "./pages";

function App() {
  return (
    <div className={styles.App}>
        <BrowserRouter>
          <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route path="/signIn" component={SignInPage}></Route>
           <Route path="/register" component={RegisterPage}></Route>
           <Route path="/detail/:touristRouteId" component={DetailPage}></Route>

           {/* 404 一定要是最后一个，因为只有前面的没有匹配才会到 404 */}
           <Route render={()=><h1>404 not found</h1>}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
