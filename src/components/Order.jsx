import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Order(props) {
  const [order, setOrder] = useState({ name: "", orderItems: [] });
  const [items, setItems] = useState([
    "Item",
    "Quantity",
    "Unit price",
    "total",
  ]);
  useEffect(() => {
    setOrder({
      names: "Abubaker Ssemugooma",
      date: new Date(),
      orderItems: [
        {
          itemName: "Chapati",
          unitPrice: 500,
          quantity: 2,
        },
      ],
    });
  }, []);
  const handleDelete = (index) => {
    // Create a copy of the items array
    const orderItems = [...order.orderItems];
    // Remove the item at the specified index
    orderItems.splice(index, 1);
    // Update the state with the modified array
    setItems(orderItems);
  };

  const addItem = () => {
    const orderItems = [...order.orderItems];
    orderItems.push({
      itemName: "",
      unitPrice: "",
      quantity: 1,
    });
    order.orderItems = orderItems;
    setOrder({ ...order });
  };
  const getTotal = (order) => {
    let result = 0;
    for (const one of order.orderItems) {
      if (typeof one.unitPrice === "number") {
        result = result + one.quantity * one.unitPrice;
      }
    }
    return result;
  };

  // const getDebt = (order) => {
  //   return 0;
  // };

  const itemNameChange = (e) => {};
  const itemQuantityChange = (e) => {};
  const itemUnitPriceChange = (e) => {};

  return (
    <Container className="mt-5">
      <Row>
        <Col md={9} sm={12} className="d-flex align-items-center"></Col>
        <Col md={3} sm={12}>
          <div className="d-flex">
            <Link to="/">
              <Button className="btn btn-secondary">cancel</Button>
            </Link>
            <Link>
              <Button className="btn btn-success" onClick={addItem}>
                Add Item
              </Button>
            </Link>
          </div>
        </Col>
        <Col md={12} sm={12}>
          <Form className="w-100">
            <Table bordered striped className="w-100">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((orderItem, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <Form.Control
                          type="text"
                          maxLength={200}
                          placeholder="Item name"
                          value={orderItem.itemName}
                          onChange={itemNameChange}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="quantity"
                          value={orderItem.quantity}
                          onChange={itemQuantityChange}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="price per item"
                          value={orderItem.unitPrice}
                          onChange={itemUnitPriceChange}
                        />
                      </td>
                      <td>{getTotal(order)}</td>
                      <td>
                        <div className="w-100 d-flex justify-content-center gap-2 align-items-center h-100">
                          <Button className="btn btn-sm btn-primary">
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(index)}
                            className="btn btn-sm btn-danger"
                          >
                            Del
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Form>
        </Col>
        <Link>
          <Button className="btn btn-primary w-25" onClick={addItem}>
            submit
          </Button>
        </Link>
      </Row>
    </Container>
  );
}

export default Order;
