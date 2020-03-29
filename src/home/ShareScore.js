import React, {useState, createContext} from "react";

export const ShareScore = createContext(null);

export const ShareScoreProvider = ({children})=>{
  const [score, setScore] = useState({scoreA: 0, scoreB: 0});

  return (
    <ShareScore.Provider value={{score, setScore}}>
      {children}
    </ShareScore.Provider>
  )
};
