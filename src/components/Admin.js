import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Admin() {
    
 // const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [offSet, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);
  const [count, setCount] = useState(4);
  useEffect(() => {
    fetchData();
  }, [offSet, limit, count]);

  async function deleteOrder(id) {
    if (id) {
      const result = window.confirm("Deleting order ?");
      if (result) {
        let response = await axios.delete(
          `http://localhost:5001/${id}`
        );
        if (response) {
          await fetchData();
        }
      }
    }
  }

  async function editOrder(name, id) {
    try {
      await axios.patch(`http://localhost:5001/${id}/${name}`, {
        name: name,
      });
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  function switchPage(page) {
    console.log("Page clicked ", page);
    setOffset(page * limit);
  }

  function getPaginationButtons() {
    let result = [];
    let numberOfPages = Math.ceil(count / limit);
    let counter = 0;
    while (counter < numberOfPages) {
      let page = counter;
      result.push(
        <button
          onClick={() => switchPage(page)}
          className="btn btn-sm btn-primary"
        >
          {counter + 1}
        </button>
      );
      counter++;
    }
    return result;
  }

  async function fetchData() {
    try {
      const response = await axios.get(
       // `http://localhost:5001/orders?offset=${offSet}&limit=${limit}`
      );
      setOrders(response.data.orders);
      setCount(response.data.count);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEditOrder(id, name) {
    editOrder(id, name);
  }
  return (
      <div>
      <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-2 mt-2 mb-2">
          <Link to="/Cat">
            <button className="btn btn-success text-center w-100"> New Member</button>
          </Link>
        </div>
        <div className="col-2 mt-2 mb-2">
          <Link to="/Loger">
            <button className="btn btn-secondary"> Cansel</button>
          </Link>
        </div>
        <div className="col-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                 <th>Name</th>
                 <th>Email</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Balance</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const { id, Name, Company, Email, Product, Amount, Balance } = order;
                return (
                  <tr key={order.id}>
                    <td>{id}</td>
                    <td>{Company}</td>
                        <td>{Name}</td>
                        <td>{Email}</td>
                        <td>{Product}</td>
                        <td>{Amount}</td>
                        <td>{Balance}</td>
                    <td className="actions w-25">
                      <div className=" can d-flex flex-row gap-2">
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => {
                            const name = prompt("Enter new name");
                            if (name) {
                              handleEditOrder(name, id);
                            }
                          }}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>

                        

                        <button className="btn btn-sm btn-success">View</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <div className="d-flex gap-2">{getPaginationButtons()}</div>
        </div>
      </div>
    </div>
  

    </div>
  )
}


