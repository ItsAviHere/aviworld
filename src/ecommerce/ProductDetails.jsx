import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="container mt-5 my-5">
      <div className="row justify-content-center align-items-center g-4 mt-5">
        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
          <div className="product-image-box shadow p-3 bg-dark rounded">
            <img
              src={product.thumbnail || product.images?.[0]}
              alt={product.title}
              className="img-fluid rounded custom-product-img"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-10 col-sm-12 text-light">
          <div className="product-details bg-dark p-4 rounded shadow">
            <h2 className="mb-3">{product.title}</h2>
            <p className="text-light">{product.description}</p>

            <h6 className="mt-3">
              Category: <span className="text-info">{product.category}</span>
            </h6>

            <div className="d-flex align-items-center mt-3">
              <span className="me-2">Rating:</span>
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStarHalfAlt className="text-warning" />
              <span className="ms-2 text-muted">({product.rating})</span>
            </div>

            <h4 className="mt-4 text-success">Price: ${product.price}</h4>

            <button className="btn btn-custom btn-lg mt-4 d-flex align-items-center justify-content-center gap-2">
              Add to Wishlist
              <FaRegHeart className="fs-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
