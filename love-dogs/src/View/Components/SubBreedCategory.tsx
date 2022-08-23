import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  category: string | undefined;
  list: string | undefined;
}
const SubBreedCategory = ({ category, list }: CardProps) => {
  return <Link to={`/${category}/${list}`}>{list}</Link>;
};

export default SubBreedCategory;
