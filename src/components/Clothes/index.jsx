import React from "react";
import "./index.css"

const Clothes = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1 className='title-item'>{props.children}</h1>
      <ul className='item'>
          <li><b>Tên:</b> {props.name}</li>
          <li><b>Loại:</b> {props.type}</li>
          <li><b>Màu:</b>  {props.color}</li>
          <li><b>Kích cỡ:</b>  {props.size}</li>
      </ul>
      <hr></hr>
    </div>
  );
};
export default Clothes;