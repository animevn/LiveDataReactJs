import React, {useContext} from "react";
import {withRouter, useHistory} from "react-router-dom";
import {ShareScore} from "./ShareScore";

function TeamA() {
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
    <div className="container mt-5 col-xl-6 col-lg-6 col-md-9 col-sm-11 col-11">
      <h2 className="text-success text-center">Scores</h2>
      <hr className="bg-success"/>
      <h3 className="text-success text-center mt-1">Team A</h3>
      <h3 className="text-success text-center my-5">{score.scoreA}</h3>

      <div className="container mx-auto d-flex justify-content-around">
        <button className="btn btn-outline-success" style={{"width":"39%"}}
                onClick={onIncrease}>
          Increase
        </button>

        <button className="btn btn-outline-success" style={{"width":"39%"}}
                onClick={onDecrease}>
          Decrease
        </button>
      </div>

      <div className="container mx-auto d-flex justify-content-around mt-4">
        <button className="btn btn-outline-success w-50"
                onClick={onBackHome}>
          Back Home
        </button>
      </div>

      <hr className="bg-success mt-4"/>

    </div>
  )
}

export default withRouter(TeamA);