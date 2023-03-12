import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getMovies } from "../movies/moviesSlicer";
import "./CategoryList.css";
import { getMoviesId, changeCategory } from "./categorySlicer";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesId());
  }, []);
  const onSelected = (category) => {
    dispatch(changeCategory(category));
    dispatch(getMovies(category.moviesId));
  };
  return (
    <div className="list">
      <h3>Top Rated Movies by Genre</h3>
      <ListGroup>
        {categories.map((category) => {
          return (
            <ListGroupItem
              active={currentCategory.moviesId === category.moviesId}
              onClick={() => onSelected(category)}
              key={category.id}
            >
              {category.moviesId}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
