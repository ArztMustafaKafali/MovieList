import React, { useState } from "react";
import CartSumamry from "../carts/CartSumamry";
import TextInput from "../toolBox/TextInput";
import "./Navi.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navi = () => {
  const [content, setContent] = useState();
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  console.log(content)
  return (
    <div className="navibar">
      <div className="naviitem" id="imdb">
        <Link className="imdbitem" to="/">
          İMDd
        </Link>
      </div>
      <div className="naviitem" id="menü">
        <CartSumamry></CartSumamry>
      </div>
      <div className="navisearch">
        <TextInput name="searchInput" value={content} onChange={handleChange}></TextInput>
      </div>
      <div className="naviitem" id="watchlist">
        <BsPlusCircleFill></BsPlusCircleFill>
        <Link className="wathclistitem" to="/watchlist">
          Wathclist
        </Link>
      </div>
    </div>
  );
};

export default Navi;
