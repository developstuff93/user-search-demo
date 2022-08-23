import AppStateProvider from "./hooks/AppStateProvider";
import "./App.scss";
import SearchBar from "./components/search-bar";
import Users from "./components/users";

function App() {
  return (
    <AppStateProvider>
      <div className="app-root">
        <SearchBar />
        <Users />
      </div>
    </AppStateProvider>
  );
}

export default App;
