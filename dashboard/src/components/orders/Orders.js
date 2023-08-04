import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;

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
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ຊື່</th>
          <th scope="col">ອີເມວ</th>
          <th scope="col">ລາຄາ</th>
          <th scope="col">ສະຖານະການຊຳລະເງີນ</th>
          <th scope="col">ວັນທີ່</th>
          <th>ສະຖານະການຈັດສົ່ງ</th>
          <th scope="col" className="text-end">
            ເບີ່ງຂໍ້ມູນ
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.user && <b>{order.user.name}</b>}</td>
            <td>{order.user && <b>{order.user.email}</b>}</td>
            <td>{formatCurrent(Number(order.totalPrice))} KIP</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  ຈ່າຍເມື່ອ {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  ຍັງບໍ່ໄດ້ຊຳລະເງີນ
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">ສົ່ງແລ້ວ</span>
              ) : (
                <span className="badge btn-dark">ຍັງບໍ່ໄດ້ຈັດສົ່ງ</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
