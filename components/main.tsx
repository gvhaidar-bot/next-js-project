import React from "react";
import Card from "./card";

const Main = () => {
  return (
    <div className="pb-20 py-6 px-4 max-w-7xl mx-auto">
      <div className="grid gap-7 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
