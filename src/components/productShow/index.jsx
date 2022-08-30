import React from "react";
import "./index.css"
import InputNumbers from "../inputNumber";
import image from '../images/girl.png';

var InputNumber = InputNumbers[0]

const productShow = (props) => {
  // console.log(props) //Giá trị của props
  return (
    <div>
      <div className="div-1">
        <div className="div-2">
        <img src={image} alt="Flowers in Chania"/>
        </div>
        <div className="div-3">
          <h1 className='title'>{props.children}</h1>
          <div className='div-4'>
            <ul className='item'>
              <li><b>Tên:</b> {props.name}</li>
              <li><b>Loại:</b> {props.type}</li>
              <li><b>Màu:</b> {props.color}</li>
              <li><b>Kích cỡ:</b> {props.size}</li>
              <li><b>Mô tả:</b> {props.description}</li>
              <li><b>Giá khởi điểm:</b> <b>{props.startPrice} VNĐ</b></li>
              <li><b>Giá đấu hiện tại:</b> <b>{props.currentPrice} VNĐ</b></li>
            </ul>
            <ul className='item'>
              <b>RA GIÁ</b>
              <p><InputNumber>input</InputNumber></p>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default productShow;