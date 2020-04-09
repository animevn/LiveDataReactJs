import React, {useContext} from "react";
import {withRouter, useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {ShareScore} from "./ShareScore";

function Home() {
  const width = {xs:11, sm:8, md:6, lg:5, xl:4};
  const {score} = useContext(ShareScore);
  let history = useHistory();

  function onUpdateTeamA(event) {
    event.preventDefault();
    history.push("/team-a");
  }

  function onUpdateTeamB(event) {
    event.preventDefault();
    history.push("/team-b");
  }

  const button = (team, score, callback)=>{
    return (
      <Box display="flex"
           flexDirection="column"
           alignItems="center"
           width={1}>

        <Typography component="div" variant="h4">
          <Box fontWeight="fontWeightBold">
            {team}
          </Box>
        </Typography>

        <Box my={5}>
          <Typography component="div" variant="h5">
            <Box fontWeight="fontWeightBold">
              {score}
            </Box>
          </Typography>
        </Box>

        <Button variant="contained" color="secondary" onClick={callback}>
          Update
        </Button>
      </Box>
    )
  };

  return (
    <Grid container direction="row" justify="center">
      <Grid item {...width}>
        <Box display="flex" flexDirection="row" justifyContent="center" my={2} >
          <Typography component="div" variant="h4">
            <Box fontWeight="fontWeightBold" color="secondary.main">
              Scores
            </Box>
          </Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" my={3}>
          <Divider style={{"backgroundColor":"red", "width":"90%"}}/>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-evenly" my={2}>
          {button("Team A", score.scoreA, onUpdateTeamA)}
          <Divider orientation="vertical" flexItem style={{"backgroundColor":"red"}} />
          {button("Team B", score.scoreB, onUpdateTeamB)}
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" my={3}>
          <Divider style={{"backgroundColor":"red", "width":"90%"}}/>
        </Box>

      </Grid>
    </Grid>
  )
}

export default withRouter(Home);