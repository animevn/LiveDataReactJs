import React, {useState, createContext, useEffect} from "react";

export const ShareScore = createContext(null);

export const ShareScoreProvider = ({children})=>{
  const initial = {scoreA: 0, scoreB: 0};
  const save = localStorage.getItem("save");
  const [score, setScore] = useState(save ? JSON.parse(save) : initial);

  useEffect(()=>{
    localStorage.setItem("save", JSON.stringify(score));
  }, [score]);

  return (
    <ShareScore.Provider value={{score, setScore}}>
      {children}
    </ShareScore.Provider>
  )
};
