import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDogsByCategory } from "../../data/getDogsByCategory";
import { getSubListBreed } from "../../data/getSubListBreed";
import BreedCard from "../Components/BreedCard";
import SubBreedCategory from "../Components/SubBreedCategory";

const BreedCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [dogs, setDogs] = useState<Array<string>>([]);
  const [dogSubLists, setDogSubLists] = useState<Array<string>>([]);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    // Get category dogs image
    getDogsByCategory(category).then((dogs) => {
      if (dogs) {
        setDogs(dogs);
      }
    });

    // Get sublist of dogs
    getSubListBreed(category).then((dogSubList) => {
      if (dogSubList) {
        setDogSubLists(dogSubList);
      }
    });
  }, [category]);

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
      <>
        {/* Check length of sublist, 
        if it equel to 1, replace to other page, 
        otherwise show title of dog breed */}
        {category !== undefined && dogSubLists.length === 1 ? (
          navigate(`/${category}/${dogSubLists[0]}`, { replace: true })
        ) : (
          <h1>{category}</h1>
        )}
      </>
      {/* Check the length of sublist,
      if it more than 1 show the sublist,
      otherwise don't show anything*/}
      <div>
        {dogSubLists.length > 1
          ? dogSubLists.map((list) => (
              <SubBreedCategory category={category} list={list} />
            ))
          : null}
      </div>
      {/* show the picture of all dog of this breed  */}
      <div className="breedPage__imgDisplay">
        {dogs.map((dogImg) => (
          <BreedCard dogImg={dogImg} setScroll={setScroll} />
        ))}
      </div>
    </div>
  );
};

export default BreedCategory;
