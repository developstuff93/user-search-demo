import { ApolloProvider } from "@apollo/client";
import AppStateProvider from "./hooks/AppStateProvider";
import SearchBar from "./components/search-bar";
import Users from "./components/users";
import Header from "./components/header";
import { createApolloClient } from "./utils/create-apollo-client";
import styles from "./App.module.scss";

function App() {
  const { apolloClient } = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AppStateProvider>
        <div className={styles.root}>
          <Header />
          <SearchBar />
          <Users />
        </div>
      </AppStateProvider>
    </ApolloProvider>
  );
}

export default App;
