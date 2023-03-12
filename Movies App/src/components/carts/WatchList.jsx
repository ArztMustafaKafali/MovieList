import React from "react";
import { Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCarts } from "./cartListSlicer";
import alertify from "alertifyjs";

const WatchList = () => {
  const movies = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const removeFromCart = (movie) => {
    dispatch(removeFromCarts(movie));
    alertify.error(movie.title + " is deleted from watchlist");
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Rank & Title</th>
            <th>IMDb Rating</th>
            <th>Your Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>
                  <img src={movie.url} alt="" />
                </td>
                <td> {movie.title} </td>
                <td>
                  <AiFillStar></AiFillStar> <strong> {movie.rating} </strong>
                </td>
                <td>
                  <AiOutlineStar></AiOutlineStar>
                </td>
                <td>
                  <MdDelete
                    onClick={() => removeFromCart(movie)}
                    style={{ fontSize: 30 }}
                  ></MdDelete>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default WatchList;
