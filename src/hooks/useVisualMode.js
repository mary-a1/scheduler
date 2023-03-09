import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);

    setHistory(prev => {
      let newHistory = [...prev];
      if (replace) {
        newHistory.pop();
      }
      return [...newHistory, newMode];
    });
  };

  const back = () => {

    if (history.length < 1) {
      return;
    }
    setHistory(prev =>{
      let newHistory = [...prev];
      newHistory.pop()
      setMode(newHistory[newHistory.length - 1]);
      return newHistory;
    })
  };
  return { mode, transition, back, history };
}

export default useVisualMode;