import AppStateProvider from "./hooks/AppStateProvider";
import "./App.scss";

function App() {
  return (
    <AppStateProvider>
      <div className="app-root"></div>
    </AppStateProvider>
  );
}

export default App;
