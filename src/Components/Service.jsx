import React, { useState } from "react";
import { ServiceData } from "../assets/ServicesData";

const Section = ({
  heading,
  description,
  isSectionVisible,
  setIsSectionVisible,
}) => {
  return (
    <div
      onClick={() => {
        isSectionVisible == heading
          ? setIsSectionVisible(null)
          : setIsSectionVisible(heading);
      }}
      className="h-auto p-5 shadow-md w-screen flex flex-col  bg-[#e2f3e2]  "
    >
      <h1 className="text-xl font-bold">{heading}</h1>
      {isSectionVisible == heading ? (
        <>
          <p className="cursor-default">{description}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export const Service = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(null);

  return (
    <div className="overflow-x-hidden w-screen  mx-auto flex flex-col gap-3 bg-[#e9f7d5]">
      {ServiceData.map((service) => (
        <Section
          key={service.heading}
          heading={service.heading}
          description={service.description}
          isSectionVisible={isSectionVisible}
          setIsSectionVisible={setIsSectionVisible}
        />
      ))}
    </div>
  );
};
