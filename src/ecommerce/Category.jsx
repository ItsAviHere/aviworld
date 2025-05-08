import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { myadd } from "./../store/Action";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

function Category() {
  const [product, setProduct] = useState([]);  
  const [fildata, setFildata] = useState([]);  
  const [activeCategory, setActiveCategory] = useState("All"); 
  const dispatch = useDispatch();

  const myapi = () => {
    axios.get("https://dummyjson.com/products").then((d) => {
      setProduct(d.data.products);
      setFildata(d.data.products);
    });
  };

  useEffect(() => {
    myapi();
  }, []);

  const uniqueCategories = [...new Set(product.map((item) => item.category))];
   

  const filterData = (e) => {
    const category = e.target.value;
    setActiveCategory(category); 
    if (category === "All") {
      setFildata(product); 
    } else {
      const filtered = product.filter((r) => r.category === category);
      setFildata(filtered);
    }
  };

  
  const topCenter = () => {
    toast.success("Your Item is added to cart", {
      position: "top-center",
    });
  };

  const dataFind = (id) => {
    axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
      dispatch(myadd(d.data));
      topCenter();
    });
  };

  return (
    <div className="container cus-area">
      <div className="row">
        <div className="d-flex direction-row col-md-12 mb-3 gap-5">
          
          <button
            className="btn btn-primary ps-5 pe-5 p-2"
            onClick={() => {setFildata(product);
              setActiveCategory("All");
            }}
          >
            All
          </button>

          {uniqueCategories.map((d, index) => (
            <button
              key={index}
              className={`btn btn-primary ps-5 pe-5 p-2 ${
                activeCategory === d ? "btn-dark" : ""
              }`}
              onClick={filterData}
              value={d}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>

        <ToastContainer />

        {fildata.map((d) => (
          <Fragment key={d.id}>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="product-card bg1 rounded-4 shadow-sm h-100 position-relative">
                <span className="badge bg-danger">New</span>
                <div className="overflow-hidden d-flex align-items-center justify-content-center">
                  <img src={d.images} className="w-50" alt="Product" />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-light mb-3">{d.title}</h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStarHalfAlt className="text-warning" />
                    </div>
                    <small className="text-light">{d.rating}/5</small>
                    <span className="price float-end d-flex justify-content-end ms-5">
                      ${d.price}
                    </span>
                  </div>
                  <p className="text-light mb-4">{d.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-custom text-white px-4 py-2 rounded-pill"
                      onClick={() => dataFind(d.id)}
                    >
                      Add to Cart
                    </button>
                    <Link to={`./../../dashboard/product/details/` + d.id}>
                      <button className="btn btn-custom text-white px-4 py-2 rounded-pill">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Category;
