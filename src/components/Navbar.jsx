function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <h2>My Shop 🛒</h2>

      <div className="menu">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

        <span className="cart">
          Cart: {cart}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;