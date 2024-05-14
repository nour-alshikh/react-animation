import "./App.scss";
//Components
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import Product from "./components/Product";
import Spec from "./components/Spec";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Product />
      <Spec />
    </>
  );
}

export default App;
