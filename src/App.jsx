import style from "./App.module.scss";
import Layout from "./Layout/Layout";
import AppRouter from "./pages/AppRouter/AppRouter.jsx";

function App() {
  return (
    <div className={style.App}>
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
