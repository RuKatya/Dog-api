import { Link } from "react-router-dom";

interface CardProps {
  breed: string | undefined;
}
const BreedCategoryCard = ({ breed }: CardProps) => {
  return <Link to={`${breed}`}>{breed}</Link>;
};

export default BreedCategoryCard;
