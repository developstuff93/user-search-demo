import { Octokit } from "octokit";
import { createContext, useContext, useState } from "react";
import { GITHUB_TOKEN, MIN_QUERY_LENGTH } from "../utils/constant";
import mock from "./mock.json";

const AppContext = createContext({});

export const useAppState = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppStateProvider({ children }) {
  const [loadingUsers, setLoadingUsers] = useState(false);
  // TODO: implement pagination if needed, for now displaying limited number of users
  const [users, setUsers] = useState(mock.data.search.nodes);
  const searchUsers = async (query) => {
    if (query.length < MIN_QUERY_LENGTH) {
      return;
    }
    try {
      setLoadingUsers(true);
      const octokit = new Octokit({
        auth: GITHUB_TOKEN,
      });
      await octokit.request("GET /search/users", { q: query });
      setUsers(mock.data.search.nodes);
    } catch (err) {
      setUsers([]);
      console.log(err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const value = {
    searchUsers,
    users,
    loadingUsers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
