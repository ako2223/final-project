import "./App.css";
import Layout from "./Layout/Layout";
import AppRouter from "./pages/AppRouter/AppRouter.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
