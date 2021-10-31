//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

const myLuckeyNum = 4 * 5;
const fName = "Dedi";
const lName = "Liphshitz";
let copyright = new Date().getFullYear();
const image = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true">
      {" "}
      My luckey number is {myLuckeyNum}{" "}
    </h1>
    <div>
      <img src={image + "?grayscale"} alt="my life" />
      <br/>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7NEfZV64HgMhe4YvWgTwX-M7RzUrjFu0FA&usqp=CAU"
        className="image"
      alt="JustPics"></img>
      <img
        src="https://static.timesofisrael.com/www/uploads/2021/10/rev-1-000_0000_kynes_v002.0001rv2Br_High_Res_JPEG-1024x640.jpeg"
        className="image"
      alt="JustPics"></img>
      <img
        src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/dune-social-feature.jpg"
        className="image"
      alt="JustPics"></img>
    </div>
    <p>Created by {fName + " " + lName} </p>
    <p>Copyright {copyright} </p>
  </div>,
  document.getElementById("root")
);
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
