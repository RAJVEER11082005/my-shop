import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <h2>My Shop 🛒</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <span className="cart">
          Cart: {cart}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;