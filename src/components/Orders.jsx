import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders([
      {
        names: "Abubaker Ssemugooma",
        date: new Date(),
        orderItems: [
          {
            itemName: "Chapati",
            unitPrice: 500,
            quantity: 2,
          },
        ],
      },
      {
        names: "Abubaker Ssemugooma",
        date: new Date(),
        orderItems: [
          {
            itemName: "Chapati",
            unitPrice: 500,
            quantity: 2,
          },
        ],
      },
      {
        names: "Abubaker Ssemugooma",
        date: new Date(),
        orderItems: [
          {
            itemName: "Chapati",
            unitPrice: 500,
            quantity: 2,
          },
        ],
      },
      {
        names: "Abubaker Ssemugooma",
        date: new Date(),
        orderItems: [
          {
            itemName: "Chapati",
            unitPrice: 500,
            quantity: 2,
          },
          {
            itemName: "Sweet banana",
            unitPrice: 500,
            quantity: 2,
          },
          {
            itemName: "Sambusa",
            unitPrice: 500,
            quantity: 2,
          },
        ],
      },
    ]);
  }, []);
  async function deleteOrder(id) {
    if (id) {
      const result = window.confirm("Deleting order ?");
      if (result) {
        let response = await axios.delete(`http://localhost:5001/${id}`);
        if (response) {
          //await fetchData();
        }
      }
    }
  }

  const getTotal = (order) => {
    let result = 0;
    for (const one of order.orderItems) {
      result = result + one.quantity * one.unitPrice;
    }
    return result;
  };

  const getDebt = (order) => {
    return 0;
  };

  const getPaginationComponent = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number < orders.length; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={9} sm={12} className="d-flex align-items-center">
          <Form className="w-100">
            <Row>
              <Col sm={12} md={6}>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="filter by name"
                />
              </Col>
              <Col sm={12} md={6}>
                <Form.Control
                  type="date"
                  size="lg"
                  placeholder="Filter by date"
                />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={3} sm={12}>
          <Link to="order">
            <Button className="btn btn-success">Add Order</Button>
          </Link>
        </Col>
        <Col md={12} sm={12}>
          <Table bordered striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>name</th>
                <th>Items</th>
                <th>Total Cost</th>
                {/* <th>Debt</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.date.toString()}</td>
                    <td>{order.names}</td>
                    <td>
                      {order.orderItems.map((orderItem) => {
                        return (
                          <p>
                            <span>{orderItem.itemName} </span>
                            <span>{orderItem.quantity} </span>
                            <span>{orderItem.unitPrice} </span>
                          </p>
                        );
                      })}
                    </td>
                    <td>{getTotal(order)}</td>
                    <td>{getDebt(order)}</td>
                    <td>
                      <div className="w-100 d-flex justify-content-center gap-2 align-items-center h-100">
                        <Button className="btn btn-sm btn-primary">Edit</Button>
                        <Button
                          onClick={() => deleteOrder(order.id)}
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
        </Col>
        <Col md={12} sm={12} className="d-flex justify-content-end">
          {getPaginationComponent()}
        </Col>
      </Row>
    </Container>
  );
}

export default Orders;
