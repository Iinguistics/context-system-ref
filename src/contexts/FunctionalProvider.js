import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function GlobalStateProvider({ children }) {
  const handleChange = (e) => {
    setNewState({ ...newState, state: { name: e.target.value } });
  };

  const [newState, setNewState] = useState({
    state: {
      name: "John Doe",
    },

    handleChange: handleChange,
  });

  return (
    <StateContext.Provider value={newState}>{children}</StateContext.Provider>
  );
}
