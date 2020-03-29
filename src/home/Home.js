import React, {useContext} from "react";
import {withRouter} from "react-router-dom";
import {ShareScore} from "./ShareScore";

function Home({history}) {
  const {score} = useContext(ShareScore);

  function onUpdateTeamA(event) {
    event.preventDefault();
    history.push("/team-a");
  }

  function onUpdateTeamB(event) {
    event.preventDefault();
    history.push("/team-b");
  }

  return (
    <div className="container mt-5 col-xl-6 col-lg-6 col-md-9 col-sm-11 col-11">

      <h2 className="text-success text-center">Scores</h2>
      <hr className="bg-success"/>

      <div className="container row d-flex justify-content-around">

        <div style={{"width":"45%"}}>
          <h3 className="text-success text-center mt-1">Team A</h3>
          <h3 className="text-success text-center my-5">{score.scoreA}</h3>
          <button className="btn btn-outline-success btn-block w-50 mx-auto"
                  onClick={onUpdateTeamA}>
            Update
          </button>
        </div>

        <div className="border-left border-success"></div>

        <div style={{"width":"45%"}}>
          <h3 className="text-success text-center mt-1">Team B</h3>
          <h3 className="text-success text-center my-5">{score.scoreB}</h3>
          <button className="btn btn-outline-success btn-block w-50 mx-auto"
                  onClick={onUpdateTeamB}>
            Update
          </button>
        </div>

      </div>

      <hr className="bg-success mt-4"/>

    </div>
  )
}

export default withRouter(Home);