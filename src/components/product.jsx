function Product(props) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h3>{props.name}</h3>
      <p className="price">${props.price}</p>

      <span className={props.inStock ? "stock in" : "stock out"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default Product;
