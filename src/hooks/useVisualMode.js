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
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => [...prev.slice(0, history.length - 1)]);
    setMode(history[history.length - 2]);
  };

  return { mode, transition, back, history };
}

export default useVisualMode;