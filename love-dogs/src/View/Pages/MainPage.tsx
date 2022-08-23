import { useEffect, useState } from "react";
import { getData } from "../../data/getDogsBreeds";
import BreedCategoryCard from "../Components/BreedCategoryCard";

const MainPage = () => {
  const [dogsBreeds, setDogsBreeds] = useState<Array<string>>([]);

  useEffect(() => {
    getData().then((breeds) => {
      if (breeds) {
        setDogsBreeds(breeds);
      }
    });
  }, []);

  return (
    <div className="mainPage">
      <h1>Hi all dogs lover!</h1>
      <h2>Here you can find pictures of dogs, enjoy!</h2>
      <div className="mainPage__grid">
        {dogsBreeds.map((breed) => (
          <BreedCategoryCard breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
