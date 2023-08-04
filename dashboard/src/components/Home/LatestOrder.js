import React from "react";
import { Link } from "react-router-dom";
import Loading from "./../LoadingError/Loading";
import Message from "./../LoadingError/Error";
import moment from "moment";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  // kip
  const formatCurrent = (price) => {
    if (!price) {
      return ""; // or some other default value
    }
    const formattedPrice = price.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    });
    return formattedPrice.replace(".", ".");
  };
  console.log(orders);
  return (
    <div className="card-body">
      <h4 className="card-title">ການສັ່ງຊື້ໃໝ່</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>
                    <b>{order.user ? order.user.name : ""}</b>
                  </td>
                  <td>{order.user ? order.user.email : ""}</td>
                  <td>{formatCurrent(Number(order.totalPrice))} KIP</td>
                  <td>
                    {order.isPaid ? (
                      <span className="badge rounded-pill alert-success">
                        ວັນທີ {moment(order.paidAt).format("MMM Do YY")}
                      </span>
                    ) : (
                      <span className="badge rounded-pill alert-danger">
                        ຍັງບໍ່ທັນຊຳລະງີນ
                      </span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).calendar()}</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
