import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const { items: data, status } = useSelector((state) => state.products);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured {error.data} </p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span className="price">₹{product.price}.00</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
