import React, { useState } from "react";

interface DogCardProps {
  dogImg: string;
  setScroll: Function;
}
const BreedCard = ({ dogImg, setScroll }: DogCardProps) => {
  const [showBigImage, setShowBigImage] = useState(false);

  return (
    <>
      <img
        className="breedPage__imgDisplay--img"
        src={dogImg}
        alt={dogImg}
        onClick={() => {
          setShowBigImage(!showBigImage);
          setScroll(false);
        }}
      />

      <div
        style={{
          display: showBigImage === true ? "flex" : "none",
        }}
        className="bigImageOfDog"
      >
        <div
          className="bigImageOfDog__clsBtn"
          onClick={() => {
            setShowBigImage(!showBigImage);
            setScroll(true);
          }}
        >
          X
        </div>
        <img src={dogImg} alt={dogImg} />
      </div>
    </>
  );
};

export default BreedCard;
