import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainRouter from "./app/routers/MainRouter";
import MainLayout from "./app/layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
