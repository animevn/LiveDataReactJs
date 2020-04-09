import React from "react";
import Header from "./templates/Header"
import Footer from "./templates/Footer";
import Home from "./home/Home";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {Route, BrowserRouter} from "react-router-dom";
import TeamA from "./home/TeamA";
import {ShareScoreProvider} from "./home/ShareScore";
import TeamB from "./home/TeamB";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Grid>
        <Header/>
        {/*app body goes down here*/}
        <BrowserRouter>
            <ShareScoreProvider>
              <Route exact path="/" component={Home}/>
              <Route exact path="/team-a"
                     render={props => <TeamA {...props} />}
              />
              <Route exact path="/team-b" component={TeamB}/>
            </ShareScoreProvider>
        </BrowserRouter>
        {/*app body goes up here hahaha */}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
