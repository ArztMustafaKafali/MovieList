import React, { useEffect } from "react";
import { Table } from "reactstrap";
import "./Movies.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./moviesSlicer";
import { addToCarts } from "../carts/cartListSlicer";

const Movies = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  },[]);

  const addTocart = (movie)=>{
    dispatch(addToCarts(movie))
  }
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
          {
            movies.map((movie)=>{
              return(
                <tr key={movie.id}>
                <td>
                  <img
                    src={movie.url}
                    alt=""
                  />
                </td>
                <td> {movie.title} </td>
                <td>
                  <AiFillStar></AiFillStar> <strong> {movie.rating} </strong>
                </td>
                <td>
                  <AiOutlineStar></AiOutlineStar>
                </td>
                <td>
                  <BiAddToQueue onClick={()=>addTocart(movie)} style={{ fontSize: 30 }}></BiAddToQueue>
                </td>
              </tr>
              )
            })

          }
        </tbody>
      </Table>
    </div>
  );
};

export default Movies;
