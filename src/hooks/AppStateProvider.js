import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const useAppState = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppStateProvider({ children }) {
  const [users, setUsers] = useState([]);
  const searchUsers = async (query) => {};

  const value = {
    searchUsers,
    users,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
