import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import PlaceOrderOnePayScreen from "./screens/PlaceOrderOnePayScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/placeorderOnePay" component={PlaceOrderOnePayScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

// import React, { useState, useRef } from 'react';
// import ml5 from 'ml5';

// const ImageClassifier = () => {
//   const [prediction, setPrediction] = useState('');
//   const fileInputRef = useRef(null);
//   const classifierRef = useRef(null);
//   const imageModelURL = './model/';

//   const setupClassifier = async () => {
//     classifierRef.current = await ml5.imageClassifier(imageModelURL + 'model.json');
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file.type.startsWith('image/')) {
//       classifyImage(file);
//     } else {
//       console.error('Invalid file type. Please upload an image file.');
//     }
//   };

//   const classifyImage = (file) => {
//     const imageElement = new Image();
//     imageElement.src = URL.createObjectURL(file);
//     classifierRef.current.classify(imageElement, gotResult);
//   };

//   const gotResult = (error, results) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     setPrediction(results[0].label); // Set prediction directly without "Prediction: "
//   };

//   // Initialize the classifier when the component mounts
//   React.useEffect(() => {
//     setupClassifier();
//   }, []);

//   return (
//     <div>
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         accept="image/*"
//         onChange={handleFileChange}
//       />
//       <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
//       <input type="text" value={prediction} readOnly />
//     </div>
//   );
// };

// export default ImageClassifier; 