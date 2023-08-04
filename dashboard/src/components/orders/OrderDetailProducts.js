import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const OrderDetailProducts = (props) => {
  const { order, loading } = props;
  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    setImage(order.imageOrder);
  }, []);

  // image url
  const [image, setImage] = useState(null);

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
    return formattedPrice.replace(".", ",");
  };
  console.log(order);
  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>ສິນຄ້າ</th>
          <th style={{ width: "20%" }}>ລາຄາ/ໜ່ວຍ</th>
          <th style={{ width: "20%" }}>ຈຳນວນ</th>
          <th style={{ width: "20%" }} className="text-end">
            ທັ້ງໝົດ
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>{formatCurrent(Number(item.price))} KIP</td>
            <td>{item.qty} </td>
            <td className="text-end">
              {formatCurrent(Number(item.qty * item.price))} KIP
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>ຍອດລວມສ່ວນ1:</dt>{" "}
                <dd>{formatCurrent(Number(order.itemsPrice))} KIP </dd>
              </dl>
              <dl className="dlist">
                <dt>ລາຄາການຈັດສົ່ງສີນຄ້າ:</dt>{" "}
                <dd>{formatCurrent(Number(order.shippingPrice))} KIP </dd>
              </dl>
              <dl className="dlist">
                <dt>ລວມທັ້ງໝົດ:</dt>
                <dd>
                  <b className="h5">
                    {formatCurrent(Number(order.totalPrice))} KIP
                  </b>
                </dd>
              </dl>

              <dl className="dlist">
                <dt className="text-muted">ສະຖານະ:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      ຊຳລະເງີນສຳເລັດແລ້ວ
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      ຍັງບໍ່ທັນໄດ້ຊຳລະເງີນ
                    </span>
                  )}
                </dd>
              </dl>
              {image && (
                <div className="d-flex w-full h-25 ">
                  <div className="text-muted  pr-2">ໃບໂອນເງີນ:</div>
                  <div className="">
                    <img
                      src={
                        image instanceof Blob
                          ? URL.createObjectURL(image)
                          : image
                      }
                      alt="Selected Image"
                      style={{ width: "280px", height: "400px" }}
                      className="rounded object-fit-fill"
                    />
                  </div>
                </div>
              )}
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
