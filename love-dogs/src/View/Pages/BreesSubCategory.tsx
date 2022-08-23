import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubDogsBreed } from "../../data/getSubDogsBreed";
import BreedCard from "../Components/BreedCard";

const BreesSubCategory = () => {
  console.log(useParams());
  const { category, subCatedory } = useParams();
  const [subDogs, setSubDogs] = useState<Array<string>>([]);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    getSubDogsBreed(category, subCatedory).then((dogs) => {
      setSubDogs(dogs);
    });
  });

  //show/hide scroll
  useEffect(() => {
    const body: any = document.querySelector("body");
    if (scroll) {
      body.style.overflowY = "scroll";
    } else {
      body.style.overflowY = "hidden";
    }
  }, [scroll]);

  return (
    <div className="breedPage">
      <h1>
        {category} {subCatedory}
      </h1>

      <div className="breedPage__imgDisplay">
        {subDogs.map((subDogImage) => (
          <BreedCard dogImg={subDogImage} setScroll={setScroll} />
        ))}
      </div>
    </div>
  );
};

export default BreesSubCategory;
