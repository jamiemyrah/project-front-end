import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Loger() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get("http://localhost:3010/products");
        setProducts([...response.data]);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 mt-2 mb-2">
            <Link to="/Cat">
              <button className="btn btn-success w-25">
                {" "}
                Add New Category
              </button>
            </Link>
          </div>
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Company</th>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.company}</td>
                      <td>{product.Product}</td>
                      <td>{product.amount}</td>
                      <td>{product.balance}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loger;
