import React from "react";
import Header from "./templates/Header"
import Footer from "./templates/Footer";
import Home from "./home/Home";
import {Route, BrowserRouter} from "react-router-dom";
import TeamA from "./home/TeamA";
import {ShareScoreProvider} from "./home/ShareScore";
import TeamB from "./home/TeamB";

function App() {
  return (
    <div className="main">
      <div className="container-fluid px-0">
        <Header/>

        {/*app goes in here*/}
        <BrowserRouter>
          <div className="container">
            <ShareScoreProvider>
              <Route exact path="/" component={Home}/>
              <Route exact path="/team-a"
                     render={props => <TeamA {...props} />}
              />
              <Route exact path="/team-b" component={TeamB}/>
            </ShareScoreProvider>
          </div>
        </BrowserRouter>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
