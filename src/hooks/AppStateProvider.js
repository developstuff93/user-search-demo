import { useLazyQuery } from "@apollo/client";
import { createContext, useContext, useState } from "react";
import { GET_USERS } from "../graphql/fetch-users";
import { MIN_QUERY_LENGTH, USERS_LIMIT } from "../utils/constant";

const AppContext = createContext({});

export const useAppState = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppStateProvider({ children }) {
  const [users, setUsers] = useState([]);
  // TODO: implement pagination if needed, for now displaying limited number of users
  const [fetchUsers, { loading: loadingUsers }] = useLazyQuery(GET_USERS, {
    onCompleted: (data) => {
      setUsers(data?.search?.nodes || []);
    },
    onError: () => {
      setUsers([]);
    },
  });

  const searchUsers = async (query) => {
    if (query.length < MIN_QUERY_LENGTH) {
      setUsers([]);
      return;
    }
    fetchUsers({
      variables: {
        query,
        limit: USERS_LIMIT,
      },
    });
  };

  const value = {
    loadingUsers,
    searchUsers,
    users,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
