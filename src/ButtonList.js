import React from "react";
const Button = ({ name }) => {
  return (
    <div>
      <button className="border border-gray-300 rounded-lg py-2 px-5 m-2">
        {name}
      </button>
    </div>
  );
};
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Friends" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Javascript" />
      <Button name="News" />
      <Button name="Programming" />
      <Button name="Shopping" />
      <Button name="Music" />
      <Button name="Movies" />
      <Button name="Live" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Sports" />
      <Button name="Learning" />
      <Button name="Fashion & Beauty" />
      <Button name="Data Structures" />
      <Button name="Algorithms" />
    </div>
  );
};

export default ButtonList;
