import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
// import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      <Login />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
