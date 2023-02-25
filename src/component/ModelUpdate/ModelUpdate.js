import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModelUpdate } from "../../store/form";
import classes from "./ModelUpdate.module.css";
import DUMMY_PRODUCTS from "./../../data/products";

const ModelUpdate = (props) => {
  const [information, setInformation] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);

  //   lấy ra thông tin của sản phẩm
  useEffect(() => {
    const data = DUMMY_PRODUCTS.filter((product) => product.id === props.id);
    setInformation(data[0]);
  }, []);

  //   kích hoạt nút đóng form
  const dispatchUpdateProduct = useDispatch();
  const handlerUpdateProduct = (e) => {
    e.preventDefault();
    dispatchUpdateProduct(openModelUpdate(false));
  };

  //   đặt lại giá trị cho ô nhập thông tin sản phẩm
  const handlerSetName = (e) => {
    setName(e.target.value);
  };
  const handlerSetPrice = (e) => {
    setPrice(e.target.value);
  };
  const handlerSaveUpdateProduct = (e) => {
    e.preventDefault();
    const index = DUMMY_PRODUCTS.findIndex(
      (product) => product.id === props.id
    );
    DUMMY_PRODUCTS[index]["name"] = name;
    DUMMY_PRODUCTS[index]["price"] = Number(price);
    console.log("\n\n", { name, price: Number(price) }, DUMMY_PRODUCTS);
  };
  return (
    <div className={classes.coverEdit}>
      <div className={classes.contentEdit}>
        <button onClick={handlerUpdateProduct}>Đóng</button>
        <input
          type="text"
          defaultValue={information.name}
          onChange={handlerSetName}
        />
        <input
          type="number"
          defaultValue={information.price}
          onChange={handlerSetPrice}
        />
        <button onClick={handlerSaveUpdateProduct}>Save</button>
      </div>
    </div>
  );
};

export default ModelUpdate;
