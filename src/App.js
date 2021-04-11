// import logo from './logo.svg';
import react from "react"
import './App.css';
import Category from "./component/Category/Category"
import ProductList from "./component/Product/ProductList"

function App() {
  return (
    <>
    <h1 className="text-center">Our Products</h1>
    <Category/>
    <ProductList/>
    </>
  );
}

export default App;
