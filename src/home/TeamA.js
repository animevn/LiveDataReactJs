import React, {useContext} from "react";
import {withRouter, useHistory} from "react-router-dom";
import {ShareScore} from "./ShareScore";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

function TeamA() {
  const width = {xs:11, sm:8, md:6, lg:5, xl:4};
  const {score, setScore} = useContext(ShareScore);
  const history = useHistory();

  function onBackHome(event) {
    event.preventDefault();
    history.push("/");
  }

  function onIncrease(event) {
    event.preventDefault();
    setScore(old=>{
      return {...old, scoreA: old.scoreA + 1}
    });
  }

  function onDecrease(event) {
    event.preventDefault();
    if (score.scoreA > 0){
      setScore(old=>{
        return {...old, scoreA: old.scoreA - 1}
      });
    }
  }

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

        <Box display="flex"
             flexDirection="column"
             alignItems="center"
             width={1}>

          <Typography component="div" variant="h4">
            <Box fontWeight="fontWeightBold" color="green">
              Team A
            </Box>
          </Typography>

          <Box my={5}>
            <Typography component="div" variant="h5">
              <Box fontWeight="fontWeightBold">
                {score.scoreA}
              </Box>
            </Typography>
          </Box>
        </Box>


        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Button variant="contained" color="secondary" onClick={onIncrease}>
            Increase
          </Button>

          <Button variant="contained" color="secondary" onClick={onDecrease}>
            Decrease
          </Button>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" mt={10}>
          <Button variant="contained" color="secondary" onClick={onBackHome}>
            Back Home
          </Button>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" my={3}>
          <Divider style={{"backgroundColor":"red", "width":"90%"}}/>
        </Box>

      </Grid>

    </Grid>
  )
}

export default withRouter(TeamA);