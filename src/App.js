
import Cart from './pages/cart';
import Login from './pages/login';
import Products from './pages/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/mycss.css';
import {HashRouter,Route,Routes} from "react-router-dom";
import NavScrollExample from'./components/NavBar.js';

function App() {
    return (
        <>
        <div className="App">
            <HashRouter>
                <header className="header">
                    <NavScrollExample/>
                </header>
                <Routes>
                    <Route path="/" element={<Products />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </HashRouter>
        </div>
        </>
    );
}

export default App;
