import React from "react";
import ReactImageGallery from 'react-image-gallery'
import "./index.css"
import InputNumbers from "../inputNumber";

var InputNumber = InputNumbers[1]

const productShow = (props) => {
  // console.log(props) //Giá trị của props
  return (
    <div className="div-0">
      <div className="div-1">
        <div className="div-2">
        {/* <img src={props.image} alt="image" className="photo"/> */}
        {<ReactImageGallery
            items={props.image}
            lazyLoad
            autoPlay
            showPlayButton={false}
            showNav={false}
            showBullets={true}
            showThumbnails={false}
            // onClick={() => history.push(`/event/detail?eid=${event?.id}`)}
          />
        }
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
              <li><b>Người bán:</b> {props.createdUserName}</li>
            </ul>
            <ul className='item'>
              <b>ĐẶT GIÁ</b>
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