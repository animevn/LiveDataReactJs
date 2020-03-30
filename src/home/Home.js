import React, {useContext} from "react";
import {withRouter, useHistory} from "react-router-dom";
import {ShareScore} from "./ShareScore";

function Home() {
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
      <div style={{"width":"45%"}}>
        <h3 className="text-success text-center mt-1">{team}</h3>
        <h3 className="text-success text-center my-5">{score}</h3>
        <button className="btn btn-outline-success btn-block w-50 mx-auto"
                onClick={callback}>
          Update
        </button>
      </div>
    )
  };

  return (
    <div className="container mt-5 col-xl-6 col-lg-6 col-md-9 col-sm-11 col-11">
      <h2 className="text-success text-center">Scores</h2>
      <hr className="bg-success"/>

      <div className="container row d-flex justify-content-around">
        {button("Team A", score.scoreA, onUpdateTeamA)}
        <div className="border-left border-success"></div>
        {button("Team B", score.scoreB, onUpdateTeamB)}
      </div>

      <hr className="bg-success mt-4"/>
    </div>
  )
}

export default withRouter(Home);